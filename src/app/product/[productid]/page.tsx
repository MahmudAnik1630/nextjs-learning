import React from "react";

type Props = {
  params: {
    productid: string;
  };
};

export default function ProductPage({ params }: Props) {
  const { productid } = params;

  return <h1>Dynamic Product Page: {productid}</h1>;
}
