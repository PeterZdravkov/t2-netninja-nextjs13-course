"use client";
import { useContext } from "react";
import { LayoutContext } from "@/app/contexts/LayoutContextProvider";
import Link from "next/link";
import React from "react";

const TicketsLayout = (tickets: any) => {
  const { activeLayout } = useContext(LayoutContext);
  
  return (
    <>
      {tickets.tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets</p>
      )}
    </>
  );
};

export default TicketsLayout;
