"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any, email: any, password: any) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
      console.log(error.message)
    }

    if (!error) {
      router.push(`${location.origin}`);
    }
  };

  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
      <div className="mt-10 flex items-center justify-center gap-4">
        <h2 className="">Don&apos;t have an account?</h2>
        <button
          className="btn-primary justify-center"
          onClick={() => router.push("/signup")}
        >
          {" "}
          Sign up
        </button>
      </div>
    </main>
  );
};

export default Login;
