"use client";

import Button from "@/components/common/Button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Crashed:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-warning">Something Went Wrong</h1>
      <p className="text-light mt-2">An unexpected error occurred.</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
