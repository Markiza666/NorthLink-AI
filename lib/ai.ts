import Groq from "groq-sdk";

// Initialize the Groq client using the environment variable
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function analyzeTicket(description: string) {
    try {
        console.log("DEBUG: Sending ticket description to Llama 3 via Groq...");

        // Call the Llama 3 model and request a JSON response
        const chatCompletion = await groq.chat.completions.create({
            model: "llama3-8b-8192", // Using the fast and efficient Llama 3 8B model
            messages: [
                {
                    role: "system",
                    content: `You are an advanced AI support assistant for NorthLink AI. 
                    Your task is to analyze incoming support tickets.
                    You MUST respond with a raw JSON object containing exactly two fields:
                    1. "summary": A concise, professional one-sentence summary of the user's issue in English.
                    2. "sentiment": Analyze the tone of the ticket and choose exactly one of these words: "Positive", "Neutral", "Negative", or "Critical".
                    
                    Do not include any introductory text, markdown formatting (like \`\`\`json), or conversational filler. Only return the raw JSON object.`,
                },
                {
                    role: "user",
                    content: `Ticket Description: ${description}`,
                },
            ],
            // We set the response format to json_object to guarantee a parseable output
            response_format: { type: "json_object" },
            temperature: 0.2, // Low temperature for more consistent and predictable results
        });

        // Extract the content string from the response
        const rawContent = chatCompletion.choices[0]?.message?.content;

        if (!rawContent) {
            throw new Error("No content returned from Llama model.");
        }

        // Parse the string into a real JavaScript object
        const aiResult = JSON.parse(rawContent);

        console.log("DEBUG: Llama analysis complete successfully:", aiResult);

        return {
            summary: aiResult.summary || "No summary generated.",
            sentiment: aiResult.sentiment || "Neutral",
        };

    } catch (error) {
        console.error("Error during Llama analysis, falling back to basic mock:", error);

        // Fallback if the API call fails (e.g., if you run out of tokens or network is down)
        return {
            summary: `Fallback: ${description.substring(0, 50)}...`,
            sentiment: "Neutral",
        };
    }
}
