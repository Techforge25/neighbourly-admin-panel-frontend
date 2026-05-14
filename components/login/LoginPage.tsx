"use client";
import { useState } from "react";
import TextInput from "../fields/TextInput";
import PasswordInput from "../fields/PasswordInput";
import { useRouter } from "next/navigation";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (key: keyof LoginForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
    
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-8"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #FCE4DD 0%, #F5F5F5 60%)",
      }}
    >
      <div className="w-full max-w-[31.25rem] rounded-2xl bg-surface p-6 shadow-md sm:p-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="font-manrope font-bold text-[1.25rem] text-text-primary ">
            Login
          </h1>
          <p className="mt-2 font-poppins font-normal text-[1rem] text-text-para md:max-w-[22rem] mx-auto ">
            Enter your credentials to manage your suburb says
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextInput
            label="Email"
            name="email"
            value={form.email}
            placeholder="you@example.com"
            required
            onChange={(v) => handleChange("email", v)}
          />

          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            placeholder="Enter your password"
            required
            onChange={(v) => handleChange("password", v)}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full cursor-pointer rounded-full bg-bg-primary py-3 font-medium text-surface transition hover:bg-bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
