import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.log(error)
    }

}

export async function POST(request: Request) {
    try {
        const {cc, name} = await request.json();
        const newUser = await prisma.user.create({
            data: {
                cc: cc,
                name: name, 
            }
        })
        return NextResponse.json(newUser);
    } catch (error) {
        console.log(error)
    }
}

