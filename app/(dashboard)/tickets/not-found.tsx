import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>The ticket you were looking for could not be found</p>
      <p>
        Go back to the <Link href={"/tickets"}>Tickets</Link> Page
      </p>
    </main>
  );
};

export default NotFound;
