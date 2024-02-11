import React from "react";
import { notFound } from "next/navigation";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }

  return <div>ProductDetails page {params.productId}</div>;
};

export default ProductDetails;
