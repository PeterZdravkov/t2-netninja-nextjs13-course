import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/next.svg";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <>
      <nav>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            height={20}
            className="mr-8"
            quality={100}
          />
        </Link>
        <h1>Helpdesk</h1>
        <Link href={"/signup"}>Sign up</Link>
        <Link href={"/login"}>Log in</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
