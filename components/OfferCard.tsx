import { Button, Flex, Image, Text } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, memo } from "react";

export interface OfferCardProps {
  id?: string | number;
  image?: string;
  label?: string;
  description?: string;
}

const OfferCard: FC<OfferCardProps> = ({ image, label, description }) => {
  return (
    <Flex
      sx={{
        bg: "white",
        width: 370,
        height: 460,
        position: "relative",
        borderRadius: 5,
        transition: "0.3s",
        flexDirection: "column",
        justifyContent: "space-between",
        ":before": {
          content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          transition: "0.3s",
        },
        ":hover": {
          ".image": {
            border: "none",
            transform: "scale(1.1)",
          },
          ":before": {
            transform: "scale(1.1)",
            boxShadow: "#959da5 0px 12px 24px 0px",
          },
          ".button": {
            transform: "translateY(10px)",
            opacity: 0.9,
            ":before": {
              transform: "scale(1)",
              borderColor: "productType1",
            },
          },
        },
      }}
    >
      <Flex
        className="image"
        sx={{
          p: 15,
          width: "100%",
          height: [140, 160, 200, 240, 240],
          borderRadius: 5,
          transition: "0.3s",
          border: "1px solid #d3d1d1",
        }}
      >
        <Image src={image} alt="offerImage" sx={{ borderRadius: 5 }} />
      </Flex>
      <Flex
        className="content"
        sx={{
          mt: 20,
          flex: 1,
          px: 15,
          position: "relative",
          flexDirection: "column",
          textAlign: "center",
          transition: "0.3s",
          overflow: "hidden",
          height: 120,
        }}
      >
        <Text variant="OfferLabel">{label}</Text>
        <Text variant="OfferDescription">{description}</Text>
      </Flex>
      <Flex
        sx={{
          p: 15,
          width: "100%",
          justifyContent: "center",
          transition: "0.2s",
        }}
      >
        <Link href="#" passHref>
          <Button
            className="button"
            p="12px 22px"
            variant="OfferButton"
            sx={{
              ":hover": {
                bg: "productType1",
                color: "white",
              },
            }}
          >
            READ MORE
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default memo(OfferCard);
