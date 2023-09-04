const getTickets = async () => {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0 /** this makes it so next never serves data from cache */,
    },
  });

  return response.json();
};

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets</p>
      )}
    </>
  );
};

export default TicketList;
