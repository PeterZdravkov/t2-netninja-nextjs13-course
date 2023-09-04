import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/next.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
