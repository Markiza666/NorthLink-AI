export type UserRole = 'user' | 'agent' | 'manager';

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    image?: string;
    role: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
}
