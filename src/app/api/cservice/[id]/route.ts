import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
    try {
        const {id} = await params;
        const cservices = await prisma.Service.findUnique({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json(cservices);
    } catch(error) {
        console.log(error)
    }
}
