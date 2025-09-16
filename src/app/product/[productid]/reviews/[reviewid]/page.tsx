import React from "react";

type Props = {
  params: {
    productid: string;
    reviewid: string;
  };
};

export default function ReviewPage({ params }: Props) {
  const { productid, reviewid } = params;

  return (
    <h1>
      Review for product {productid} and review {reviewid}
    </h1>
  );
}
