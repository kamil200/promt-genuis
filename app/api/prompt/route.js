import { connecttoDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(request) =>{
    try{
        await connecttoDB();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts),{status:200})
    }
    catch(error){
        return new Response("Failed to find Prompts",{status:500})
        
    }
}