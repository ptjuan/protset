import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cservices = await prisma.service.findMany();
        return NextResponse.json(cservices);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {product, medium, clientt, user} = await request.json();
        const newService = await prisma.service.create({
            data: {
                product: product,
                medium: medium,
                clientt: clientt,
                user: user
            }
        })
        return NextResponse.json(newService);
    } catch (error){
        console.log({error})
    }
}