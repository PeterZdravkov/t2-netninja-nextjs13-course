"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const ticket = {
      title,
      body,
      priority,
    };

    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    const json = await response.json();

    if (json.error) console.log(json.error.message);
    if (json.data) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e: any) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e: any) => setPriority(e.target.value)}
          value={priority}
        >
          <option value={"low"}>Low priority</option>
          <option value={"medium"}>Medium priority</option>
          <option value={"high"}>High priority</option>
        </select>
      </label>

      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
      </button>
    </form>
  );
};

export default CreateForm;
