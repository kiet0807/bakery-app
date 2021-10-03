import { Flex, Text, Box } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, memo, PropsWithChildren, SVGProps } from "react";

const Cycle: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 77.06 71.94" fill="currentColor" {...props}>
    <path
      d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z"
      transform="translate(-1182.94 -3348.03)"
    ></path>
  </svg>
);

export interface ChooseUsProps {
  id?: string | number;
  label?: string;
  content?: string;
}

const ChooseUs: FC<PropsWithChildren<ChooseUsProps>> = ({
  label,
  content,
  children,
  id,
}) => {
  return (
    <Flex
      p="50px 0 70px"
      sx={{
        flexDirection:
          id === "3" || id === "4"
            ? [
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row-reverse",
              ]
            : [
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
              ],
        justifyContent: "space-between",
        borderBottom: id === "1" || id === "3" ? "1px solid #e6e6e6" : "none",
        ":hover": {
          ".icon": {
            transform:
              id === "3" || id === "4"
                ? "rotate(0.15turn)"
                : "rotate(-0.15turn)",
          },
        },
      }}
    >
      <Flex
        sx={{
          flex: 1,
          mx: 10,
          flexDirection: "column",
          textAlign:
            id === "1" || id === "2"
              ? ["center", "center", "center", "center", "right"]
              : ["center", "center", "center", "center", "left"],
        }}
      >
        <Link href="#" passHref>
          <Text
            variant="ChooseLabel"
            sx={{
              cursor: "pointer",
              ":hover": {
                color: "productType1",
              },
            }}
          >
            {label}
          </Text>
        </Link>
        <Text variant="ChooseContent">{content}</Text>
      </Flex>

      <Flex
        sx={{
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            m: "2px 13px 15px",
            width: 50,
            pl: 2,
            svg: { fill: "productType1" },
          }}
        >
          {children}
        </Box>
        <Flex
          className="icon"
          sx={{
            position: "absolute",
            top: -10,
            transition: "0.3s",
          }}
        >
          <Cycle
            width={70}
            height={70}
            opacity={0.07}
            transform={id === "1" || id === "2" ? "rotate(80)" : "rotate(0)"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(ChooseUs);
