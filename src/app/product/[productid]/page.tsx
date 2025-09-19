import React from "react";

type Props = {
  params: {
    productid: number;
  };
};

export default function ProductPage({ params }: Props) {
  const { productid } = params;

  return <h1>Dynamic Product Page: {productid}</h1>;
}
