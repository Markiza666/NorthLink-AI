import { Types } from "mongoose";

export type Priority= 'low' | 'medium' | 'high' ;
export type Status = 'open' | 'in-progress' | 'closed' ;

export interface ITicket {
    _id?: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    aiSummarry?: string;
    aiSentiment?: string;
    criator: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
