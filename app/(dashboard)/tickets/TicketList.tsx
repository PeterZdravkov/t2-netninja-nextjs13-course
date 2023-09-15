import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import TicketsLayout from "./TicketsLayout";

const TicketList = async () => {
  const tickets: any = await getTickets();

  return <TicketsLayout tickets={tickets} />;
};

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("Tickets").select();

  if (error) console.log(error.message);

  return data;
};

export default TicketList;
