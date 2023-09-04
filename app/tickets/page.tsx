import React from "react";
import TicketList from "./TicketList";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
          <TicketList />
        </div>
      </nav>
    </main>
  );
};

export default Tickets;
