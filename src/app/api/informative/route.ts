import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const {type, product, medium} = await request.json();
        const newInfo = await prisma.Informative.create({
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