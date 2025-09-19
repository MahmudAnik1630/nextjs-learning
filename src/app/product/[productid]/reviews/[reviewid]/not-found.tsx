"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname(); 

 
  const parts = pathname.split("/");
  const productId = parts[2];
  const reviewId = parts[4];

  return (
    <h1>
      Review {reviewId} Page Not Found for Product {productId}
    </h1>
  );
}
