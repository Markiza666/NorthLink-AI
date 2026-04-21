import { IUser } from "@/types/user";
import mongoose, { Model, Schema } from "mongoose";

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        image: { type: String },
        role: {
            type: String,
            enum: ['user', 'agent', 'manager'],
            default: 'user'
        },
    },
    { timestamps: true }
);

const User: Model<IUserDocument> =
mongoose.models.User || mongoose.model<IUserDocument>('User', UserSchema);

export default User;
