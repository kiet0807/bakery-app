import {
  BoxProps,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Link,
  Text,
} from "@theme-ui/components";
import React, { FC, memo, SVGProps, useState } from "react";
import { formatCurrency } from "../utils/functions";

const Search: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    xmlSpace="preserve"
    fill="currentColor"
    {...props}
  >
    <path d="M90.4,84L75.8,69.5C87.2,54.9,86,34.1,72.9,21c-6.9-6.9-16.1-10.7-25.9-10.7c-9.8,0-19,3.8-25.9,10.7  c-6.9,6.9-10.7,16.1-10.7,25.9c0,9.8,3.8,19,10.7,25.9c6.9,6.9,16.1,10.7,25.9,10.7c8.1,0,16.1-2.7,22.5-7.8L84,90.4  c0.9,0.9,2,1.3,3.2,1.3c1.2,0,2.3-0.5,3.2-1.3C92.2,88.7,92.2,85.8,90.4,84z M74.6,46.9c0,7.4-2.9,14.3-8.1,19.5  c-5.2,5.2-12.2,8.1-19.5,8.1s-14.3-2.9-19.5-8.1c-5.2-5.2-8.1-12.2-8.1-19.5c0-7.4,2.9-14.3,8.1-19.5s12.2-8.1,19.5-8.1  c7.4,0,14.3,2.9,19.5,8.1C71.7,32.6,74.6,39.5,74.6,46.9z" />
  </svg>
);

const Cart: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 511.997 511.997"
    fill="currentColor"
    {...props}
  >
    <path
      d="M405.387,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84
			S440.588,362.612,405.387,362.612z M405.387,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536
			c14.083,0,25.536,11.453,25.536,25.536S419.47,451.988,405.387,451.988z"
    />

    <path
      d="M507.927,115.875c-3.626-4.641-9.187-7.348-15.079-7.348H118.22l-17.237-72.12c-2.062-8.618-9.768-14.702-18.629-14.702
			H19.152C8.574,21.704,0,30.278,0,40.856s8.574,19.152,19.152,19.152h48.085l62.244,260.443
			c2.062,8.625,9.768,14.702,18.629,14.702h298.135c8.804,0,16.477-6.001,18.59-14.543l46.604-188.329
			C512.849,126.562,511.553,120.516,507.927,115.875z M431.261,296.85H163.227l-35.853-150.019h341.003L431.261,296.85z"
    />
    <path
      d="M173.646,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84
			S208.847,362.612,173.646,362.612z M173.646,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536
			s25.536,11.453,25.536,25.536S187.729,451.988,173.646,451.988z"
    />
  </svg>
);

export interface CardProps extends BoxProps {
  id?: string;
  image?: string;
  name?: string;
  descriptions?: string;
  priceOld?: number;
  price?: number;
  productType?: string | undefined;
  onAddCart?: (id: string) => void;
}

const ProductCard: FC<CardProps> = ({
  id,
  name,
  descriptions,
  image,
  priceOld,
  price,
  productType,
  onAddCart,
  ...BoxProps
}) => {
  const [firstBtn, setFirstBtn] = useState<Boolean>(false);
  const [secondBtn, setSecondBtn] = useState<Boolean>(false);
  return (
    <Flex {...BoxProps}>
      <Card variant="productCard">
        <Flex
          mb={20}
          sx={{
            position: "relative",
            justifyContent: "center",
            width: 230,
            height: 200,
          }}
        >
          <Image variant="productImage" src={image} />
          <Text
            variant="productType"
            bg={
              productType === "sale"
                ? "productType1"
                : productType && "productType2"
            }
          >
            {productType}
          </Text>
        </Flex>
        <Text variant="productName">{name}</Text>
        <Text variant="productDescription">{descriptions}</Text>
        <Flex my={5}>
          {priceOld && (
            <Text variant="productPriceOld">
              {formatCurrency(priceOld)}
              <Text as="sup">đ</Text>
            </Text>
          )}
          <Text ml={12} variant="productPrice">
            {formatCurrency(price)}
            <Text as="sup">đ</Text>
          </Text>
        </Flex>
        <Grid
          columns={2}
          pb={10}
          mt="auto"
          sx={{
            width: "100%",
            gap: 20,
          }}
        >
          <Flex
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link href="#">
              <Button
                variant="productButton"
                onMouseOver={() => setFirstBtn(true)}
                onMouseLeave={() => setFirstBtn(false)}
                pt={5}
                sx={{
                  ":after": { transform: secondBtn && "scale(0.8)" },
                  svg: secondBtn && { transform: "scale(0.8)" },
                }}
              >
                <Search width={33} height={33} />
              </Button>
            </Link>
          </Flex>
          <Flex
            sx={{
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => onAddCart(id)}
              onMouseOver={() => setSecondBtn(true)}
              onMouseLeave={() => setSecondBtn(false)}
              variant="productButton"
              pr={4}
              sx={{
                ":after": { transform: firstBtn && "scale(0.8)" },
                svg: firstBtn && { transform: "scale(0.8)" },
              }}
            >
              <Cart width={27} height={27} />
            </Button>
          </Flex>
        </Grid>
      </Card>
    </Flex>
  );
};

export default memo(ProductCard);
