export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alldoctor`, {
    cache: "no-store",
  });
  const data = await res.json();
  return Response.json(data);
}