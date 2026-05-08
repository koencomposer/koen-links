import { NextResponse } from "next/server";

const redirects: Record<string, string> = {
  join: "https://forms.gle/hbFyp5kQnGeEMZE1A",
  free: "https://skool.com/piano",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const destination = redirects[slug];

  if (!destination) {
    return new Response("Not found", { status: 404 });
  }

  console.log({
    slug,
    referer: request.headers.get("referer"),
  });

  return NextResponse.redirect(destination);
}