import { redirect } from "next/navigation";

const redirects: Record<string, string> = {
  join: "https://google.com",
  free: "https://skool.com/piano",
};

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;
  const destination = redirects[params.slug];

  if (!destination) {
    return new Response("Not found", { status: 404 });
  }

  redirect(destination);
}