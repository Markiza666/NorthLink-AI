import { ITicket } from "@/types/ticket";
import mongoose, { Model, Schema } from "mongoose";

export interface ITicketDocument extends ITicket, Document {}

const TicketSchema = new Schema<ITicketDocument> (
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        status: {
            type: String,
            enum: ['open', 'in_progress', 'resolved', 'closed'],
            default: 'open'
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high', 'critical'],
            default: 'medium'
        },
        aiSummarry: { type: String },
        aiSentiment: { type: String },
        criator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const Ticket: Model<ITicketDocument> =
    mongoose.models.Ticket || mongoose.model<ITicketDocument>('Ticket', TicketSchema);

export default Ticket;
