import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  console.log(name, email, message);
  return NextResponse.json({ message: "Message received" });
}
