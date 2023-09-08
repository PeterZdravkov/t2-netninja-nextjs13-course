import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

export async function generateMetadata({ params }: any) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket, error }: any = await supabase
    .from("Tickets")
    .select()
    .eq("id", params.id)
    .single();

  if (error) console.log(error.message);

  return { title: `Helpdesk | ${ticket?.title || "Ticket not found"}` };
}

const getTicket = async (id: any) => {
  const supabase = createServerComponentClient({ cookies });
  const { data }: any = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  return data;
};

const TicketDetails = async ({ params }: any) => {
  const ticket = await getTicket(params.id);

  const supabase = createServerComponentClient({ cookies });
  const userEmail = (await supabase.auth.getSession()).data.session?.user.email;

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {userEmail === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
