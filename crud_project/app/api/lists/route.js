import connectMongoDb from "@/libs/mongodb";
import Lists from "@/models/list";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, description } = await req.json();
    await connectMongoDb();
    await Lists.create({ title, description });
    return NextResponse.json({ message: "List Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDb();
    const lists = await Lists.find();
    return NextResponse.json({ lists });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDb();
    await Lists.findByIdAndDelete(id)
    return NextResponse.json({ message: "List Deleted" }, { status: 200 });
}