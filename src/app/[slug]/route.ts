import { NextResponse } from "next/server";

const redirects: Record<string, string> = {
  join: "https://google.com",
  free: "https://skool.com/piano",
};

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const destination = redirects[params.slug];

  if (!destination) {
    return NextResponse.json({ error: "Not found", slug: params.slug }, { status: 404 });
  }

  return NextResponse.redirect(destination, 307);
}