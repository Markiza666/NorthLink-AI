import { Types } from "mongoose";

export type Priority= 'low' | 'medium' | 'high' ;
export type Status = 'open' | 'in-progress' | 'closed' ;

export interface ITicket {
    _id?: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    aiSummary?: string;
    aiSentiment?: string;
    creator: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
