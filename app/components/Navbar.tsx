import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/next.svg";
import LogoutButton from "./LogoutButton";

const Navbar = ({ user }: any) => {

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
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
