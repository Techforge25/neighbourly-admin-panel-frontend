"use client";
import TextInput from "../fields/TextInput";
import PasswordInput from "../fields/PasswordInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { login } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { LoginForm } from "@/types";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  const username = watch("username");
  const password = watch("password");
  const isDisabled = !username || !password

  const { mutate, isPending } = useMutation({
    mutationFn: async (event: LoginForm) => {
      try {
        await login(event);
        console.log('route')
        router.push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error)
      }
    },
  })

  const onSubmit = async (data: LoginForm) => {
    mutate(data)
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <TextInput
            label="Username or Email"
            register={register('username')}
            placeholder="you@example.com"
          />

          <PasswordInput
            label="Password"
            register={register('password')}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            disabled={isDisabled}
            className="mt-2 w-full cursor-pointer rounded-full bg-bg-primary py-3 font-medium text-surface transition hover:bg-bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
