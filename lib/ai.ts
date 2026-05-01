export async function analyzeTicket(description: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockSummary = `Conclusion: Ticket subject "${description.substring(0, 40)}..."`;
    const mockSentiment = description.length > 50 ? "Negativ/Complex" : "Neutral";

    console.log("DEBUG: Simulated AI analysis complete.");

    return {
        summary: mockSummary,
        sentiment: mockSentiment
    };
}
