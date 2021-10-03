import { Flex, Grid, Text, Image, Box } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, ReactNode, SVGProps } from "react";
import { contact } from "../pages";
import { Address, Mail } from "./Header";

interface ItemProps {
  id?: number;
  href?: string;
  label?: string;
  src?: string;
  icon?: ReactNode;
}

const LinkItems: ItemProps[] = [
  {
    id: 1,
    href: "#",
    label: "About Us",
  },
  {
    id: 2,
    href: "#",
    label: "What We Offer",
  },

  {
    id: 3,
    href: "#",
    label: "Our Team",
  },

  {
    id: 4,
    href: "#",
    label: "Our Blog",
  },

  {
    id: 5,
    href: "#",
    label: "Shop",
  },

  {
    id: 6,
    href: "#",
    label: "Testimonials",
  },
  {
    id: 7,
    href: "#",
    label: "Pricing",
  },
  {
    id: 8,
    href: "#",
    label: "Baking School",
  },
  {
    id: 9,
    href: "#",
    label: "FAQ",
  },
  {
    id: 10,
    href: "#",
    label: "Our Recipes",
  },
  {
    id: 11,
    href: "#",
    label: "Contact Us",
  },
];

const ImageItems: ItemProps[] = [
  {
    id: 1,
    src: "images/grid-gallery-1-original.jpg",
  },
  {
    id: 2,
    src: "images/grid-gallery-2-original.jpg",
  },

  {
    id: 3,
    src: "images/grid-gallery-3-original.jpg",
  },

  {
    id: 4,
    src: "images/grid-gallery-4-original.jpg",
  },

  {
    id: 5,
    src: "images/grid-gallery-5-original.jpg",
  },

  {
    id: 6,
    src: "images/grid-gallery-6-original.jpg",
  },
];

const Phone: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
  </svg>
);

const Facebook: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z" />
  </svg>
);

const Instagram: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M25 12c-3.53 0-3.973.015-5.36.078c-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5a6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36c.063 1.384.283 2.329.604 3.155c.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604c1.387.063 1.83.078 5.36.078c3.53 0 3.973-.015 5.36-.078c1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5a6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155c.063-1.387.078-1.83.078-5.36c0-3.53-.015-3.973-.078-5.36c-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303a6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076c1.267.058 1.956.27 2.414.448c.607.236 1.04.517 1.495.972c.455.455.736.888.972 1.495c.178.458.39 1.146.448 2.414c.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495a4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448c-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972a4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414c-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414c.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448c1.37-.062 1.782-.076 5.253-.076" />
    <path d="M25 18a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0a1.6 1.6 0 0 1 3.2 0" />
  </svg>
);

const Twitter: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1c1.2-.8 2.2-1.9 2.7-3.3c-1.2.7-2.5 1.2-3.8 1.5c-1.1-1.2-2.7-1.9-4.4-1.9c-3.3 0-6.1 2.7-6.1 6.1c0 .5.1.9.2 1.4c-5-.2-9.5-2.7-12.5-6.3c-.5.7-.8 1.7-.8 2.8c0 2.1 1.1 4 2.7 5c-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9c-.5.1-1 .2-1.6.2c-.4 0-.8 0-1.1-.1c.8 2.4 3 4.2 5.7 4.2c-2.1 1.6-4.7 2.6-7.5 2.6c-.5 0-1 0-1.4-.1c2.4 1.9 5.6 2.9 9 2.9c11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z" />
  </svg>
);

const LinkedIn: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085c-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678c1.025 0 1.854.285 2.487 1.001c.637.717.954 1.679.954 3.03V19z" />
    <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" fill="currentColor" />
  </svg>
);

const Github: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M25 10c-8.3 0-15 6.7-15 15c0 6.6 4.3 12.2 10.3 14.2c.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2c-.7-1.7-1.7-2.2-1.7-2.2c-1.4-.9.1-.9.1-.9c1.5.1 2.3 1.5 2.3 1.5c1.3 2.3 3.5 1.6 4.4 1.2c.1-1 .5-1.6 1-2c-3.3-.4-6.8-1.7-6.8-7.4c0-1.6.6-3 1.5-4c-.2-.4-.7-1.9.1-4c0 0 1.3-.4 4.1 1.5c1.2-.3 2.5-.5 3.8-.5c1.3 0 2.6.2 3.8.5c2.9-1.9 4.1-1.5 4.1-1.5c.8 2.1.3 3.6.1 4c1 1 1.5 2.4 1.5 4c0 5.8-3.5 7-6.8 7.4c.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7c6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z" />
  </svg>
);

const TouchItems: ItemProps[] = [
  {
    id: 1,
    href: "#",
    icon: <Facebook />,
  },
  {
    id: 2,
    href: "#",
    icon: <Instagram />,
  },
  {
    id: 3,
    href: "#",
    icon: <Twitter />,
  },
  {
    id: 4,
    href: "#",
    icon: <LinkedIn />,
  },
  {
    id: 5,
    href: "#",
    icon: <Github />,
  },
];

const Footer = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          mx: 15,
          pt: 100,
          width: [600, 600, 700, 1170, 1170],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid columns={[1, 1, 1, "2fr 4fr", "3fr 5fr"]}>
          <Flex pb={70} mx={15} sx={{ flexDirection: "column" }}>
            <Text mb={45} variant="FooterLabel">
              GALLERY
            </Text>
            <Grid columns={3} gap={10}>
              {ImageItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.src}
                    key={item.id}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      transition: "0.3s",
                      height: "100%",
                      ":hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Grid>
          </Flex>
          <Grid columns={[1, 1, 1, "3fr 2fr", "3fr 2fr"]}>
            <Flex pb={70} mx={15} sx={{ flexDirection: "column" }}>
              <Text mb={35} variant="FooterLabel">
                QUICK LINKS
              </Text>
              <Grid columns={2}>
                {LinkItems.map((item) => (
                  <Link key={item.id} href={item.href} passHref>
                    <Text
                      variant="FooterContent"
                      sx={{
                        cursor: "pointer",
                        transition: "0.3s",
                        ":hover": {
                          color: "productType1",
                        },
                      }}
                    >
                      - {item.label}
                    </Text>
                  </Link>
                ))}
              </Grid>
            </Flex>
            <Flex mx={15} sx={{ flexDirection: "column" }}>
              <Text mb={35} variant="FooterLabel">
                GET IN TOUCH
              </Text>
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                <Flex
                  sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                  <Address width={20} height={20} />
                  <Text variant="FooterContent">
                    {contact.street}, {contact.address}
                  </Text>
                </Flex>
                <Flex
                  my={15}
                  color="productType1"
                  sx={{ alignItems: "center" }}
                >
                  <Phone width={20} height={20} />
                  <Text ml={15} variant="FooterContent">
                    {contact.telephone}
                  </Text>
                </Flex>
                <Flex color="productType1" sx={{ alignItems: "center" }}>
                  <Mail width={20} height={20} />
                  <Text ml={15} variant="FooterContent">
                    {contact.mail}
                  </Text>
                </Flex>
              </Flex>
              <Flex
                sx={{
                  my: 30,
                  justifyContent: [
                    "left",
                    "left",
                    "left",
                    "space-between",
                    "space-between",
                  ],
                }}
              >
                {TouchItems.map((item) => (
                  <Link key={item.id} href={item.href} passHref>
                    <Flex
                      sx={{
                        mx: [0, 10, 15, 0, 0],
                        p: 3,
                        bg: "transparent",
                        border: "1px solid",
                        borderColor: "productType2",
                        borderRadius: 99,
                        opacity: 0.7,
                        transition: "0.3s",
                        cursor: "pointer",
                        width: 40,
                        height: 40,
                        color: "productType2",
                        ":hover": {
                          color: "white",
                          borderColor: "productType1",
                          bg: "productType1",
                          opacity: 1,
                          transform: "rotate(-1turn)",
                        },
                      }}
                    >
                      {item.icon}
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Grid>
        </Grid>
        <Text
          mt={70}
          py={35}
          variant="FooterContent"
          sx={{
            width: "100%",
            textAlign: "center",
            borderTop: "1px solid #cfcccc",
            opacity: 0.8,
          }}
        >
          © 2021. Sweet Bakery All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
