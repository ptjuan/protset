import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cservices = await prisma.Service.findMany();
        return NextResponse.json(cservices);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {type, product, medium, clientt, user, complexity} = await request.json();
        const newService = await prisma.Service.create({
            data: {
                type: type,
                product: product,
                medium: medium,
                clientt: clientt,
                user: user,
                complexity: complexity
            }
        })
        return NextResponse.json(newService);
    } catch (error){
        console.log({error})
    }
}