import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({ message: "The connection was successful!" });
    } catch {
        return NextResponse.json({ error: "Could not connect to the database." }, { status: 500 });
    }
}
