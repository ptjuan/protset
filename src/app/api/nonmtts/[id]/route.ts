import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: any) {
    try {
        const {id} = await params;
        const ntransactions = await prisma.NonMonetaryTransactional.findUnique({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json(ntransactions);
    } catch(error) {
        console.log(error)
    }
}
