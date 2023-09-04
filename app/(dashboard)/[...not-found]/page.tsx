import { notFound } from "next/navigation";
import React from "react";

const NotFound = () => {
  notFound();
  return <div>NotFound</div>;
};

export default NotFound;
