import dbConnect from "@/lib/dbConnect";
import Ticket from "@/models/Ticket";
import { analyzeTicket } from "@/lib/ai"; // Importera AI-funktionen
import mongoose from "mongoose";
import styles from './page.module.scss';
import Button from "@/components/ui/Button";

export default async function TestPage() {
    
    async function createTicket(formData: FormData) {
        "use server";
        
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;

        try {
            await dbConnect();

            console.log("AI analyzes the case...");
            const aiResult = await analyzeTicket(description);

            const dummyCreatorId = new mongoose.Types.ObjectId("123456789012345678901234");
            
            await Ticket.create({
                title,
                description,
                status: "open",
                priority: "medium",
                aiSummary: aiResult.summary,
                aiSentiment: aiResult.sentiment,
                creator: dummyCreatorId 
            });
            
            console.log("Ticket med AI-analys sparad i Azure!");
        } catch (err) {
            console.error("Något gick fel:", err);
        }
    }

    return (
        <div className={styles.cont}>
            <h1>Create new Ticket (med AI-analys)</h1>
            <form action={createTicket} className={styles.form}>
                <input 
                    name="title" 
                    placeholder="Titel" 
                    required 
                    className={styles.input} 
                />
                <textarea 
                    name="description" 
                    placeholder="Describe the problem here..." 
                    required 
                    className={styles.textarea}
                />
                <Button label="Create Ticket" variant="primary" type="submit" />
            </form>
        </div>
    );
}
