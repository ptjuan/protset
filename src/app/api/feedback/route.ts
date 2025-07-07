import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const feedbacks = await prisma.feedback.findMany();
        return NextResponse.json(feedbacks);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {title, product, medium, description, score} = await request.json();
        const newFeedback = await prisma.feedback.create({
            data: {
                title: title,
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