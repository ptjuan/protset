import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const ntransactions = await prisma.nonmonetarytransactional.findMany();
        return NextResponse.json(ntransactions);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: Request) {
    try {
        const {product, medium, category} = await request.json();
        const newNtransaction = await prisma.nonmonetarytransactional.create({
            data: {
                product: product,
                medium: medium,
                category: category
            }
        })
        return NextResponse.json(newNtransaction);
    } catch (error){
        console.log({error})
    }
}