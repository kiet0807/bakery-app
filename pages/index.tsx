import { Button, Flex, Grid, Image, Text } from "@theme-ui/components";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { FC, memo, SVGProps, useCallback } from "react";
import { ElementItem } from "../components/ElementsCard";
import Header, { HeaderProps } from "../components/Header";
import { ItemProps } from "../components/Menu";
import Nav from "../components/Nav";
import OfferCard, { OfferCardProps } from "../components/OfferCard";
import ProductCard, { CardProps } from "../components/ProductCard";
import useLocalStorage from "../hooks/useLocalStorage";

const menuItems: ItemProps[] = [
  { id: "1", label: "HOME" },
  {
    id: "2",
    label: "GALLERY",
    content: [
      "GRID GALLERY",
      "GRID FULLWIDTH GALLERY",
      "MASONRY GALLERY",
      "MASONRY FULLWIDTH GALLERY",
    ],
  },
  {
    id: "3",
    label: "SHOP",
    content: [
      "GRID SHOP",
      "SHOP LIST",
      "SINGLE PRODUCT",
      "CART PAGE",
      "CHECK OUT",
    ],
  },
  { id: "4", label: "BLOG", content: ["GRID BLOG", "BLOG LIST", "BLOG POST"] },
  {
    id: "5",
    label: "PAGES",
    content: ["WHAT WE OFFER", "OUR TEAM", "TESTIMONIALS", "PRICING LIST"],
  },
  {
    id: "6",
    label: "ELEMENTS",
    content: [],
  },
  { id: "7", label: "CONTACT US" },
];

export const elements: ElementItem = {
  element: [
    "TYPOGRAPHY",
    "ICON LISTS",
    "PROGRESS BARS",
    "CALLS TO ACTION",
    "TABS & ACCORDIONS",
    "BUTTONS",
    "TABLES",
    "FORMS",
    "COUNTERS",
    "GRID SYSTEM",
  ],
  additional: ["404 PAGE", "COMING SOON", "PRIVACY POLICY", "SEARCH RESULTS"],
  welcome: "images/avatar.jpg",
};

export const address: HeaderProps = {
  street: "111 Đặng Thùy Trâm",
  address: "Phường 13, Bình Thạnh, HCM",
};

const offerItems: OfferCardProps[] = [
  {
    id: 1,
    image: "images/offer-1.jpg",
    label: "PARTY CUPCAKES",
    description:
      "We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.",
  },
  {
    id: 2,
    image: "images/offer-2.jpg",
    label: "WEDDING CAKES",
    description:
      "Nothing tastes better than a chocolate cake with a variety of flavors, which is always available at our bakery.",
  },
  {
    id: 3,
    image: "images/offer-3.jpg",
    label: "CHOCO CAKES",
    description:
      "Want to make your wedding unforgettable? Then you need to order a unique wedding cake at Sweet Bakery!",
  },
];

const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="268.832px"
    height="268.832px"
    viewBox="0 0 268.832 268.832"
    fill="currentColor"
    {...props}
  >
    <path
      d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
		c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
		c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
    />
  </svg>
);

interface indexProps {
  data: CardProps[];
}

const index: FC<indexProps> = ({ data }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const onAddCart = useCallback(
    (id: string) => {
      const index = cart.findIndex((item) => item.id === id);
      if (index === -1) setCart([...cart, { id: id, quantity: 1 }]);
      else {
        cart[index].quantity += 1;
        setCart(cart);
      }
    },
    [cart]
  );

  const onPlus = useCallback(
    (index: number) => {
      cart[index].quantity += 1;
      setCart(cart);
    },
    [cart]
  );

  const onMinus = useCallback(
    (index: number) => {
      cart[index].quantity > 1
        ? (cart[index].quantity -= 1)
        : cart.splice(index, 1);
      setCart(cart);
    },
    [cart]
  );

  const onDelete = useCallback(
    (index: number) => {
      cart.splice(index, 1);
      setCart(cart);
    },
    [cart]
  );

  return (
    <Flex
      bg="white"
      mb={200}
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
      <Header {...address} />
      <Nav
        items={menuItems}
        cart={cart}
        data={data}
        elements={elements}
        onMinus={onMinus}
        onPlus={onPlus}
        onDelete={onDelete}
      />
      <Flex
        sx={{
          height: 500,
          position: "relative",
        }}
      >
        <Image src="images/bg-hero.jpg" alt="panner" variant="indexImage" />
        <Flex
          pt={80}
          sx={{
            width: "100%",
            zIndex: 1,
            justifyContent: "center",
          }}
        >
          <Flex
            mx={15}
            sx={{
              width: 1170,
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Text variant="ImageLabel">Delicious</Text>
            <Text variant="ImageContent">CAKES FOR YOU</Text>
            <Text variant="ImageDescription">
              Sweet Bakery offers the best cakes and sweets for you.
            </Text>
            <Link href="#">
              <Button
                mr="auto"
                p="25px 50px"
                variant="secondary"
                sx={{ boxShadow: "#bebebe 0px 5px 12px 0px" }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "relative",
          width: "100%",
          height: 530,
          justifyContent: "center",
          top: -40,
          overflow: "hidden",
        }}
      >
        <Flex
          p={10}
          bg="#f3f7f8"
          sx={{
            width: 1170,
            height: 490,
            zIndex: 1,
            position: "absolute",
            boxShadow: "#959da5 0px 12px 24px 0px",
            ":hover": {
              ".button": {
                transform: "scale(1)",
                opacity: 1,
              },
            },
          }}
        >
          <Image
            src="images/promo.jpg"
            alt="secondPanner"
            variant="indexImage1"
          />
          <Flex
            sx={{
              flexDirection: "column",
              width: 540,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text mt={60} variant="ImageLabel1">
              Only Fresh Cakes
            </Text>
            <Text variant="ImageContent1">
              All of our products are made from scratch using family recipes
              with only the highest quality ingredients. We bake and sell fresh
              daily to ensure only the best products are sold to our customers.
            </Text>
            <Link href="#">
              <Button
                className="button"
                variant="secondary"
                pt={4}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 99,
                  opacity: 0.5,
                  transform: "scale(0.5)",
                  boxShadow: "#959da5 0px 12px 24px 0px",
                }}
              >
                <Arrow width={15} height={15} />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            p: "30px 0 120px",
            width: 1170,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text my={60} variant="offerLabel1">
            WHAT WE OFFER
          </Text>
          <Grid columns={3} gap={30}>
            {offerItems.map((item) => (
              <Flex key={item.id}>
                <OfferCard
                  label={item.label}
                  image={item.image}
                  description={item.description}
                />
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        sx={{
          bg: "#ebebeb",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            py: 60,
            width: 1170,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text my={60} variant="offerLabel1">
            NEW PRODUCTS
          </Text>
          <Grid gap={0} columns={[1, 2, 2, 3, 4]}>
            {data.map((item) => (
              <Flex
                key={item.id}
                sx={{
                  p: 15,
                  height: 460,
                }}
              >
                <ProductCard {...item} onAddCart={onAddCart} />
              </Flex>
            ))}
          </Grid>
          <Link href="#">
            <Button
              my={30}
              p="25px 50px"
              variant="secondary"
              sx={{
                boxShadow: "#bbbbbb 0px 12px 24px 0px",
              }}
            >
              VIEW ALL
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get("https://cjlfu.sse.codesandbox.io/products");
  const data: CardProps[] = res.data;

  return {
    props: {
      data,
    },
  };
};

export default memo(index);
