import connectMongoDb from "@/libs/mongodb";
import Lists from "@/models/list";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json();
    await connectMongoDb();
    await Lists.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "List Updated" }, { status: 200 });
}
export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDb();
    const list = await Lists.findOne({ _id: id });
    return NextResponse.json({ list }, { status: 200 });
}