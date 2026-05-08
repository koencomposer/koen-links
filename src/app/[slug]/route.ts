import { NextRequest, NextResponse } from "next/server";

const redirects: Record<string, string> = {
  join: "https://google.com",
  free: "https://skool.com/piano",
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const destination = redirects[slug];

  if (!destination) {
    return NextResponse.json({ error: "Not found", slug }, { status: 404 });
  }

  return NextResponse.redirect(destination, 307);
}