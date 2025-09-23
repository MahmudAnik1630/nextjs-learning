import { notFound } from "next/navigation";
import React from "react";



export default function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params; 
  console.log(id);
  const idNumber = parseInt(id, 10);

  if(idNumber>3){
    notFound();
  }

  return <h1>Blog Page ID: {idNumber}</h1>;
}
