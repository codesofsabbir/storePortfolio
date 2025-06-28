import dbConnect from "@/lib/mongoose";
import Educations from "@/models/educations";

export async function GET(request) {
    try{
        await dbConnect();
        const educations = await Educations.find()
        return Response.json(educations);
    }catch(error){
        return Response.json(
            { message: "Error fetching doctors" },
            { status: 500 }
        );
    }
}