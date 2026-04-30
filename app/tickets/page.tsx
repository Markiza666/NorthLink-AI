import dbConnect from "@/lib/dbConnect";
import Ticket from "@/models/Ticket";
import styles from "./tickets.module.scss";

export default async function TicketsPage() {
    await dbConnect();

    const tickets = await Ticket.find({}).sort({ createdAt: -1 });

    return (
        <div className={styles.container}>
            <h1>Active cases</h1>
            <div className={styles.grid}>
                {tickets.map((ticket) => (
                    <div key={ticket._id.toString()} className={styles.card}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.description}</p>
                        
                        <div className={styles.aiBox}>
                            <strong>AI Summary:</strong>
                            <p>{ticket.aiSummary || "No analysis available"}</p>

                            <div className={styles.footer}>
                                <span className={styles.status}>{ticket.status}</span>
                                <span className={styles.sentiment}>
                                    {ticket.aiSentiment}
                                </span>
                            </div>
                        </div>
                        <span className={styles.status}>{ticket.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
