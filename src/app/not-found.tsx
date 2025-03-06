import Button from "@/components/common/Button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="text-light mt-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-primary text-light-light rounded-lg hover:bg-primary-light transition"
      >
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
