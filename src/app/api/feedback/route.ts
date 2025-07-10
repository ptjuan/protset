import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const feedbacks = await prisma.Feedback.findMany();
        return NextResponse.json(feedbacks);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {type, product, medium, description, score} = await request.json();
        const newFeedback = await prisma.Feedback.create({
            data: {
                type: type,
                product: product,
                medium: medium,
                description: description,
                score : score
            }
        })
        return NextResponse.json(newFeedback);
    } catch (error){
        console.log({error})
    }
}