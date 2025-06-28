import dbConnect from "@/lib/mongoose";
import developerdetails from "@/models/developerdetails";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    await dbConnect();
    const { username, password } = await request.json();
    const user = await developerdetails.findOne({ userName: username });
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
    const response = NextResponse.json({message:"login successful"});
    response.cookies.set("token", "your-session-token", {
        httpOnly:true,
        secure:true,
        path: '/',
        maxAge: 60*60*24,
    })
    return response;
  } catch (error) {
    return NextResponse.json({ message: "login faild" }, { status: 500 });
  }
}
