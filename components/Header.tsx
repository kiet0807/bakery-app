import { BoxProps, Button, Flex, Image, Text } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, memo, SVGProps } from "react";

export interface HeaderProps extends BoxProps {
  street: string;
  address: string;
  onHome?: () => void;
}

export const Address: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="#c14679"
    {...props}
  >
    <path d="m256 4c-108.075 0-196 87.925-196 196 0 52.5 31.807 119.92 94.537 200.378a1065.816 1065.816 0 0 0 93.169 104.294 12 12 0 0 0 16.588 0 1065.816 1065.816 0 0 0 93.169-104.294c62.73-80.458 94.537-147.878 94.537-200.378 0-108.075-87.925-196-196-196zm0 336c-77.2 0-140-62.8-140-140s62.8-140 140-140 140 62.8 140 140-62.8 140-140 140z" />
    <path d="m352.072 183.121-88-80a12 12 0 0 0 -16.144 0l-88 80a12.006 12.006 0 0 0 -2.23 15.039 12.331 12.331 0 0 0 10.66 5.84h11.642v76a12 12 0 0 0 12 12h28a12 12 0 0 0 12-12v-44a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v44a12 12 0 0 0 12 12h28a12 12 0 0 0 12-12v-76h11.642a12.331 12.331 0 0 0 10.66-5.84 12.006 12.006 0 0 0 -2.23-15.039z" />
  </svg>
);

export const Mail: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="#c14679"
    {...props}
  >
    <path
      d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1z"
      fill="currentColor"
    />
  </svg>
);

const Header: FC<HeaderProps> = ({ street, address, ...BoxProps }) => {
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
                <Text variant="address">{street}</Text>
                <Text variant="address">{address}</Text>
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
            <Link href="/">
              <Image
                sx={{
                  userSelect: "none",
                  cursor: "pointer",
                }}
                src="images/logo.png"
              />
            </Link>
          </Flex>
          <Link href="#">
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
