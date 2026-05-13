import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-7xl font-bold text-text-secondary">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-text-primary">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-text-para">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/login"
        className="mt-6 rounded-full bg-bg-primary px-6 py-3 text-surface transition hover:bg-bg-primary/90"
      >
        Go Back Home
      </Link>
    </div>
  );
}
