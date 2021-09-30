import { Button, Flex, Grid, Image, Text } from "@theme-ui/components";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { FC, memo, SVGProps, useCallback, useState } from "react";
import ChooseUs, { ChooseUsProps } from "../components/ChooseUs";
import { ElementItem } from "../components/ElementsCard";
import Footer from "../components/Footer";
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
  address: "Phường 13, Quận Bình Thạnh, TP.HCM",
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

const ChooseUsItems: ChooseUsProps[] = [
  {
    id: "1",
    label: "QUALITY PRODUCTS",
    content:
      "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
  },
  {
    id: "2",
    label: "FREE DELIVERY",
    content:
      "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
  },
  {
    id: "3",
    label: "CATERING SERVICE",
    content:
      "Our bakery also provides an outstanding catering service for events and special occasions.",
  },
  {
    id: "4",
    label: "ONLINE PAYMENT",
    content:
      "We accept all kinds of online payments including Visa, MasterCard, American Express credit cards.",
  },
];

interface AboutUsProps {
  id?: number;
  button?: string;
  label?: string;
  href?: string;
  content?: string;
}

const AboutUsItems: AboutUsProps[] = [
  {
    id: 1,
    button: "OUT MISSION",
    label: "PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS",
    href: "#",
    content:
      "Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.",
  },
  {
    id: 2,
    button: "OUR VALUES",
    label: "ENSURING THE BEST ATMOSPHERE FOR EVERYONE",
    href: "#",
    content:
      "We see the most important part of our business in ensuring the happiness of our staff and the satisfaction of our clients by creating a welcoming and caring atmosphere.",
  },
  {
    id: 3,
    button: "OUR GOALS",
    label: "SERVING ONLY THE FRESHEST BAKED GOODS FOR YOU",
    href: "#",
    content:
      "We aim to deliver the best baked goods for corporate events and individual celebrations, while also offering the best level of customer service in the United States.",
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

const Flower: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 16.114c-3.998-5.951-8.574-7.043-8.78-7.09L2 8.75V10c0 7.29 3.925 12 10 12c5.981 0 10-4.822 10-12V8.75l-1.22.274c-.206.047-4.782 1.139-8.78 7.09z" />
    <path d="M11.274 3.767c-1.799 1.898-2.84 3.775-3.443 5.295c1.329.784 2.781 1.943 4.159 3.685c1.364-1.76 2.826-2.925 4.17-3.709c-.605-1.515-1.646-3.383-3.435-5.271L12 3l-.726.767z" />
  </svg>
);

const CardIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    {...props}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.001 12H4z" />
    <path d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM6 14h6v2.001H6zm7 0h5v2.001h-5z" />
  </svg>
);

const Cookie: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    {...props}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937c.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3c0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z" />
    <circle cx="12.5" cy="11.5" r="1.5" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <circle cx="7.5" cy="12.5" r="1.5" />
    <circle cx="15.5" cy="15.5" r="1.5" />
    <circle cx="10.5" cy="16.5" r="1.5" />
  </svg>
);

const Van: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73a3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0a2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5A1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5z" />
  </svg>
);

interface indexProps {
  data: CardProps[];
}

const index: FC<indexProps> = ({ data }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [page, setPage] = useState<number>(1);
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

  const onPage = useCallback((id: number) => {
    setPage(id);
  }, []);

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
      <Flex
        sx={{
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
            WHY CHOOSE US
          </Text>
          <Grid
            columns={["5fr 0 5fr", "5fr 0 5fr", "5fr 0 5fr", 3, 3]}
            gap={[20, 20, 20, 0, 0]}
          >
            <Flex sx={{ flexDirection: "column" }}>
              {ChooseUsItems.filter(
                (item) => item.id === "1" || item.id === "2"
              ).map((item) => (
                <ChooseUs
                  label={item.label}
                  content={item.content}
                  key={item.id}
                  id={item.id}
                >
                  {item.id === "1" ? (
                    <Cookie width={45} height={45} />
                  ) : (
                    <Van width={45} height={45} />
                  )}
                </ChooseUs>
              ))}
            </Flex>
            <Flex
              sx={{
                transition: "0.3s",
                transform: [
                  "scale(0)",
                  "scale(0)",
                  "scale(0)",
                  "scale(1)",
                  "scale(1)",
                ],
              }}
            >
              <Image
                src="images/why-choose-us.jpg"
                alt="whyChooseUs"
                sx={{
                  objectFit: "scale-down",
                }}
              />
            </Flex>
            <Flex sx={{ flexDirection: "column" }}>
              {ChooseUsItems.filter(
                (item) => item.id === "3" || item.id === "4"
              ).map((item) => (
                <ChooseUs
                  label={item.label}
                  content={item.content}
                  key={item.id}
                  id={item.id}
                >
                  {item.id === "3" ? (
                    <Flower width={45} height={45} />
                  ) : (
                    <CardIcon width={45} height={45} />
                  )}
                </ChooseUs>
              ))}
            </Flex>
          </Grid>
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
          background: "url(images/parallax-bg.jpg) no-repeat center/cover",
          backgroundAttachment: "fixed",
          ":before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            bg: ["white", "white", "white", "transparent", "transparent"],
            opacity: 0.7,
          },
        }}
      >
        <Flex
          sx={{
            py: 60,
            width: 1170,
            justifyContent: ["center", "center", "center", "left", "left"],
          }}
        >
          <Flex
            sx={{
              mx: 15,
              transition: "0.3s",
              flexDirection: "column",
              width: ["80%", "80%", "45%", "45%", "45%"],
            }}
          >
            <Text
              mt={60}
              variant="offerLabel1"
              sx={{
                textAlign: ["center", "center", "center", "left", "left"],
                zIndex: 1,
              }}
            >
              SUMMER SALE
            </Text>

            <Text
              my={15}
              variant="ImageLabel1"
              sx={{
                fontSize: 40,
                textAlign: ["center", "center", "center", "left", "left"],
                zIndex: 1,
              }}
            >
              -20%
              <Text
                ml={15}
                variant="ChooseLabel"
                sx={{ letterSpacing: "2px", fontFamily: "sans-serif" }}
              >
                ON ALL CAKES
              </Text>
            </Text>

            <Text
              variant="ChooseContent"
              sx={{ textAlign: ["center", "center", "center", "left", "left"] }}
            >
              Purchase our tasty cakes and sweets for your next event or family
              dinner at our online shop and save more money than anywhere.
            </Text>
            <Flex
              m="20px 0 60px"
              sx={{
                justifyContent: ["center", "center", "center", "left", "left"],
              }}
            >
              <Button
                p="25px 50px"
                variant="secondary"
                sx={{ boxShadow: "#bebebe 0px 5px 12px 0px" }}
              >
                SHOP NOW
              </Button>
            </Flex>
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
            p: "60px 0 100px",
            width: [600, 600, 700, 1170, 1170],
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text my={60} variant="offerLabel1">
            About Us
          </Text>
          <Grid columns={[1, 1, 1, 2, 2]} gap={0}>
            <Flex
              sx={{
                justifyContent: "center",
              }}
            >
              <Image
                px={15}
                src="images/about.jpg"
                alt="aboutUs"
                sx={{
                  objectFit: "cover",
                  height: 510,
                }}
              />
            </Flex>

            <Flex
              px={15}
              sx={{
                flexDirection: "column",
              }}
            >
              <Flex
                mt={[40, 40, 40, 0, 0]}
                sx={{
                  p: "8% 4% 10% 18%",
                  flexDirection: "column",
                  position: "relative",
                  bg: "transparent",
                  zIndex: 1,
                  ":after": {
                    content: "''",
                    position: "absolute",
                    height: "calc(100% - 30px)",
                    border: "15px solid #f5f5f5",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "38%",
                  },
                }}
              >
                <Flex
                  sx={{
                    bg: "white",
                    flexDirection: "column",
                    py: 24,
                  }}
                >
                  <Text
                    variant="ChooseLabel"
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        color: "productType1",
                      },
                    }}
                  >
                    {AboutUsItems[page - 1].label}
                  </Text>
                  <Text
                    variant="ChooseContent"
                    sx={{
                      fontSize: [10, 12, 12, 14, 14],
                      height: 80,
                      overflow: "hidden",
                    }}
                  >
                    {AboutUsItems[page - 1].content}
                  </Text>
                </Flex>
                <Flex
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Link href={AboutUsItems[page - 1].href}>
                    <Button
                      className="button"
                      p="12px 22px"
                      variant="OfferButton"
                      sx={{
                        ":hover": {
                          transform: "translateY(10px)",
                          opacity: 0.9,
                          ":before": {
                            transform: "scale(1)",
                            borderColor: "productType1",
                          },
                        },
                      }}
                    >
                      READ MORE
                    </Button>
                  </Link>
                </Flex>
              </Flex>
              <Flex
                mt={[40, 40, 40, "auto", "auto"]}
                bg="aboutUs"
                sx={{
                  justifyContent: "space-around",
                  width: "100%",
                  counterReset: "item",
                  alignItems: "center",
                }}
              >
                {AboutUsItems.map((item) => (
                  <Button
                    onClick={() => onPage(item.id)}
                    py={50}
                    m={0}
                    key={item.id}
                    bg="aboutUs"
                    variant="AboutUsButton"
                    sx={{
                      opacity: page === item.id ? 1 : 0.5,
                      color: page === item.id ? "productType1" : "productType2",
                      ":after": {
                        color:
                          page === item.id ? "productType1" : "productType2",
                      },
                      ":before": {
                        transform:
                          page === item.id
                            ? "translate(-50%, -100%)"
                            : "translateY(-50%)",
                      },
                    }}
                  >
                    {item.button}
                  </Button>
                ))}
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "center",
          background: "url(images/bg-partner.jpg) no-repeat center/cover",
        }}
      >
        <Flex
          sx={{
            py: 100,
            width: 1170,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Image px={15} src="images/partner-1.png" />
          <Image px={15} src="images/partner-2.png" />
          <Image px={15} src="images/partner-3.png" />
          <Image px={15} src="images/partner-4.png" />
          <Image px={15} src="images/partner-5.png" />
        </Flex>
      </Flex>
      <Footer />
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
