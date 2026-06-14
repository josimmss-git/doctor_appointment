import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p>Page Not Found</p>

      <Link
        href="/"
        className="btn mt-4"
      >
        Go Home
      </Link>

    </div>
  );
}