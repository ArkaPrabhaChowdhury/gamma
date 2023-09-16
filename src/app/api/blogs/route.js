import Blogs from "@/models/blogs";
import connectMongoDB from "./../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, image, description, content } = await request.json();
  await connectMongoDB();
  await Blogs.create({ title, image, description, content });
  return NextResponse.json(
    { message: "Blog created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blogs.find().lean().exec();
  return NextResponse.json({ blogs });
}
