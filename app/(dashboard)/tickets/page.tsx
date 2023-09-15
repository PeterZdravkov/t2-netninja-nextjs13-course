import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "@/app/(dashboard)/loading";
import { Metadata } from "next";
import Link from "next/link";
import LayoutPill from "./LayoutPill";
import LayoutContextProvider from "@/app/contexts/LayoutContextProvider";

export const metadata: Metadata = {
  title: "Helpdesk | Tickets",
  description: "Generated by create next app",
};

const Tickets = () => {
  return (
    <main>
      <nav className="h-16">
        <div className="">
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>

        <LayoutPill />
        <Link href={"/tickets/create"} className="ml-auto mt-1">
          <button className="btn-primary">Create a Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
