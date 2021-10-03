import { BoxProps, Button, Flex, Image, Text } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, memo, SVGProps } from "react";
import { contact } from "../pages";

export const Address: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    fill="#c14679"
    {...props}
  >
    <path d="M47.782 55.36c5.513.635 10.687-1.049 14.638-4.763c4.012-3.771 5.817-7.914 5.817-13.354c0-5.508-1.823-9.633-5.955-13.478c-1.826-1.7-4.227-3.095-6.844-3.978c-2.14-.723-6.883-.903-9.427-.358c-2.833.606-6.203 2.365-8.336 4.349c-3.99 3.712-5.901 8.075-5.901 13.465c0 3.231.472 5.255 1.915 8.206c1.05 2.147 1.444 2.682 3.406 4.633c1.708 1.699 2.645 2.425 4.074 3.159c2.355 1.208 4.406 1.865 6.613 2.12zm1.036 44.214c-.388-.236-2.127-1.926-3.865-3.756C31.64 81.798 22.345 68.161 17.3 55.241c-1.518-3.887-2.08-5.85-2.675-9.33c-1.823-10.67.36-21.094 6.272-29.96c2.25-3.375 6.816-7.95 10.075-10.098c11.891-7.835 26.22-7.802 38.166.087c3.1 2.048 7.711 6.702 9.906 10c4.018 6.039 6.16 12.237 6.81 19.715c.531 6.102-.383 12.06-2.862 18.694c-4.826 12.902-13.598 25.78-28.706 42.144c-3.373 3.653-3.971 3.99-5.468 3.08z" />
  </svg>
);

export const Mail: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="#c14679"
    {...props}
  >
    <path d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1z" />
  </svg>
);

export interface HeaderProps {
  street: string;
  address: string;
  telephone: string;
  mail: string;
}

const Header: FC<BoxProps> = ({ ...BoxProps }) => {
  return (
    <Flex
      bg="white"
      sx={{
        height: [0, 0, 0, 0, 120],
        alignItems: "center",
        borderBottom: "1px solid #e6e6e6",
        transform: ["scale(0)", "scale(0)", "scale(0)", "scale(0)", "scale(1)"],
        transition: "0.3s",
        opacity: [0, 0, 0, 0, 1],
      }}
      {...BoxProps}
    >
      <Flex
        sx={{
          width: "100%",
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Flex
          mx={15}
          sx={{
            width: "100%",
            maxWidth: 1170,
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Flex
            sx={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Address width={40} height={40} />
            <Link href="#">
              <Flex
                ml={10}
                sx={{
                  flexDirection: "column",
                  color: "productType2",
                  cursor: "pointer",
                  ":hover": {
                    color: "productType1",
                  },
                }}
              >
                <Text variant="address">{contact.street}</Text>
                <Text variant="address">{contact.address}</Text>
              </Flex>
            </Link>
          </Flex>

          <Flex
            sx={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Image
                sx={{
                  userSelect: "none",
                  cursor: "pointer",
                }}
                src="images/logo.png"
                alt="images/logo.png"
              />
            </Link>
          </Flex>
          <Link href="#" passHref>
            <Flex
              sx={{
                flex: 1,
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button p="15px 25px" variant="primary">
                <Flex
                  sx={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Mail width={20} height={20} />
                  <Text ml={5}>GET IN TOUCH</Text>
                </Flex>
              </Button>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Header);
