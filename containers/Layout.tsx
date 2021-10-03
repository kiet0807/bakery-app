import Head from "next/head";
import React, { FC, memo, PropsWithChildren, ReactNode } from "react";
import { Box, Flex } from "theme-ui";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Layout: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <Flex
      bg="white"
      sx={{
        width: "100%",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      <Head>
        <title>Sweet Bakery</title>
        <link rel="shortcut icon" href="/images/bakery.jpg" />
        <meta property="og:title" content="Bakery" />
        <meta
          property="og:image"
          content="https://toppng.com/uploads/preview/51-bakery-icon-packs-dessert-pie-icon-115552356724bznqtsuv1.png"
        />
        <meta property="og:image:alt" content="bakery" />
        <meta
          property="og:description"
          content="Chuyên buôn bán các loại bánh sỉ và lẽ"
        />
      </Head>
      <Header />
      <Navigation />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default memo(Layout);
