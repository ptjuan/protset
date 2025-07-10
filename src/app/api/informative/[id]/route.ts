import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: any) {
    try {
        const {id} = await params;
        const infos = await prisma.Informative.findUnique({
            where: {
                id: Number(id)
            }
        });
        return NextResponse.json(infos);
    } catch(error) {
        console.log(error)
    }
}
