import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const transactions = await prisma.MonetaryTransactional.findMany();
        return NextResponse.json(transactions);
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request: any) {
    try {
        const {type, product, medium, category} = await request.json();
        const newMTransaction = await prisma.MonetaryTransactional.create({
            data: {
                type: type,
                product: product,
                medium: medium,
                category: category
            }
        })
        return NextResponse.json(newMTransaction);
    } catch (error){
        console.log({error})
    }
}