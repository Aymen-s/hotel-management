import { getRoomReviews } from "@/libs/apis";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const roomReviews = await getRoomReviews(id);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: "Successful",
    });
  } catch (error) {
    console.log("Getting Review Failed", error);
    return new NextResponse("Unable to fetch", { status: 400 });
  }
}
