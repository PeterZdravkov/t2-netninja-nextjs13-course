import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/next.svg";
import LogoutButton from "./LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Navbar = async ({ user }: any) => {
  const supabase = createServerComponentClient({ cookies });
  const userSession = (await supabase.auth.getUser()).data.user?.user_metadata
    .avatar_url;

  return (
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
      <h1 className="">Helpdesk</h1>
      <Link className="" href="/">
        Dashboard
      </Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      {userSession && (
        <Link href={`/profile`}>
          <Image
            src={userSession}
            alt={"Profile Picture"}
            width={37}
            height={37}
            className="rounded-full"
          />
        </Link>
      )}
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
