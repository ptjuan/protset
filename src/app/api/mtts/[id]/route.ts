import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
    try {
        const {id} = await params;
        const mtransactions = await prisma.MonetaryTransactional.findUnique({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json(mtransactions);
    } catch(error) {
        console.log(error)
    }
}
