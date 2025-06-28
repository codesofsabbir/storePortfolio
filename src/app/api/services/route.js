import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Services from "@/models/services";
export async function GET(request) {
  try {
    await dbConnect();
    const services = await Services.find();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching reviews" },
      { status: 500 }
    );
  }
}
