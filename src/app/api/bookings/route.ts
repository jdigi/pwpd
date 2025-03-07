import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const bookingData = await req.json();
  console.log("Booking request received:", bookingData);

  // simulate saving to DB (will be replaced with actual DB call)
  return NextResponse.json(
    { message: "Booking request received" },
    { status: 200 }
  );
}
