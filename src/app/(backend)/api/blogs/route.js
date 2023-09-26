import connectMongoDB from "@/libs/mongodb";
import Blogs from "@/models/blogs";
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

export async function PATCH(request) {

  const { id, title, image, description, content } = await request.json();

  await connectMongoDB();

  const result = await Blogs.findByIdAndUpdate(
    id, 
    { title, image, description, content },
    { new: true }
  );

  return NextResponse.json(result);
}

export async function DELETE(request) {

  const { id } = await request.json();

  await connectMongoDB();

  await Blogs.findByIdAndDelete(id);

  return NextResponse.json({ message: 'Blog deleted successfully' });
}
