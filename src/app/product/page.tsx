import Link from "next/link";
import React from "react";
// import {Link} from 'next'

const Product = () => {
  const productList = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
  ];
  return (
    <div>
      Product page
      {productList.map((item) => (
        <li key={item.id}>
          <Link href={`product/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Product;
