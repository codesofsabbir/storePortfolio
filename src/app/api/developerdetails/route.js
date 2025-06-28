import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Developerdetails from "@/models/developerdetails";

export async function GET(request) {
  try {
    await dbConnect();
    const bio = await Developerdetails.findOne();
    return NextResponse.json(bio);
  } catch (error) {
    console.error("Error fetching developer details:", error);
    return NextResponse.json(
      { message: "Fetching developer details error" },
      { status: 500 }
    );
  }
}
