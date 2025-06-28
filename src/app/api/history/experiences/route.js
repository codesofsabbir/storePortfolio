import dbConnect from "@/lib/mongoose";
import Experiences from "@/models/experiences";

export async function GET(request) {
    try{
        await dbConnect();
        const experiences = await Experiences.find()
        return Response.json(experiences);
    }catch(error){
        return Response.json(
            { message: "Error fetching doctors" },
            { status: 500 }
        );
    }
}