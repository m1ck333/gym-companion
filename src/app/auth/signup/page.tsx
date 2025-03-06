"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }

    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md bg-dark-light p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
