import React from "react";
import Navbar from "../components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LayoutContextProvider from "@/app/contexts/LayoutContextProvider";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={data.session?.user} />

      <LayoutContextProvider>{children}</LayoutContextProvider>
    </>
  );
};

export default DashboardLayout;
