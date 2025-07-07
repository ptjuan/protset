import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const informative = await prisma.informatve.findMany();
        return NextResponse.json(informative);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {type, product, medium} = await request.json();
        const newInfo = await prisma.informative.create({
            data: {
                type: type,
                product: product,
                medium: medium
            }
        })
        return NextResponse.json(newInfo);
    } catch (error){
        console.log({error})
    }
}