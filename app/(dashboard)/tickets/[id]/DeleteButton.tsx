"use client";

import React from "react";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(`/api/tickets/${id}`, { method: "DELETE" });
    const json = await res.json(); //This json will contain the error of the request if there is one, otherwise it will be empty
    if (json.error) {
      console.log(json.error);
      setIsLoading(false);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <button
      className="btn-primary w-36"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <TiDelete size={24} />
          Deleting...
        </>
      ) : (
        <>
          <div>
            <TiDelete size={24} />
          </div>
          Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteButton;
