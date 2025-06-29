import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Messages from "@/models/messages";
export async function GET(request) {
    try{
        await dbConnect();
        const messages = await Messages.find();
        return NextResponse.json(messages);
    }catch(error){
        return NextResponse.json(
            {message: "there have a problem with fetching messages data"},
            {status: 500}
        )
    }
}