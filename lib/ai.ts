export async function analyzeTicket(description: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockSummary = `Sammanfattning: Ärendet rör "${description.substring(0, 40)}..."`;
    const mockSentiment = description.length > 50 ? "Negativt/Komplext" : "Neutralt";

    console.log("DEBUG: Simulated AI analysis complete.");

    return {
        summary: mockSummary,
        sentiment: mockSentiment
    };
}
