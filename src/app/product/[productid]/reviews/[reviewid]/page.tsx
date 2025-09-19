import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productid: number;
    reviewid: number;
  };
};

export default function ReviewPage({ params }: Props) {
  const { productid, reviewid } = params;
  if(reviewid > 1000)
  {
    notFound();
  }

  return (
    <h1>
      Review for product {productid} and review {reviewid}
    </h1>
  );
}
