"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

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
      console.log(error.message);
    }

    if (!error) {
      router.push(`${location.origin}`);
      router.refresh();
    }
  };

  const signIn = () => {
    const supabase = createClientComponentClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/api/auth/callback` },
    });
  };

  return (
    <main className="">
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
      <div className="my-8 flex justify-center">
        <button
          type="button"
          className="btn-primary flex h-14 w-64 justify-center rounded-md"
          onClick={signIn}
        >
          <div className="flex w-full items-center justify-items-end ">
            <BsGoogle size={30} className="ml-1.5" />
            <h2 className="flex w-full justify-center text-white">
              Log in with Google
            </h2>
          </div>
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-4">
        <h2 className="">Don&apos;t have an account?</h2>
        <button
          className="btn-primary justify-center"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </main>
  );
};

export default Login;
