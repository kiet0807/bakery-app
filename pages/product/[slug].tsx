import { Flex } from "@theme-ui/components";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { CardProps } from "../../components/ProductCard";
import Product from "../../models/Product";
import db from "../../utils/db";

const product = ({ products }) => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((x) => x.slug === slug);
  if (!product) {
    return <Flex>Product Not Found</Flex>;
  }
  return <Flex>{product.name}</Flex>;
};

export const getServerSideProps = async () => {
  await db.connect();
  const products: CardProps[] = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
};

export default product;
