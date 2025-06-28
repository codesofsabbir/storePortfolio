import dbConnect from "@/lib/mongoose";
import Reviews from "@/models/reviews";
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    await dbConnect();
    const reviews = await Reviews.find();
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching reviews" },
      { status: 500 }
    );
  }
}
