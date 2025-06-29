import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Skills from "@/models/skills";
export async function GET(request) {
  try {
    await dbConnect();
    const skills = await Skills.find();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching reviews" },
      { status: 500 }
    );
  }
}
