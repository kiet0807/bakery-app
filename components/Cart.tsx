import { Button, Flex, Grid, Image, Text } from "@theme-ui/components";

import React, {
  FC,
  memo,
  SVGProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { formatCurrency } from "../utils/format";
import { CardProps } from "./ProductCard";

const CartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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

const Delete: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path
      d="M408.299,98.512l-32.643,371.975H136.344L103.708,98.512l-41.354,3.625l33.232,378.721
			C97.335,498.314,112.481,512,130.076,512h251.849c17.588,0,32.74-13.679,34.518-31.391l33.211-378.472L408.299,98.512z"
    />

    <path
      d="M332.108,0H179.892c-19.076,0-34.595,15.519-34.595,34.595v65.73h41.513V41.513h138.378v58.811h41.513v-65.73
			C366.703,15.519,351.184,0,332.108,0z"
    />

    <path
      d="M477.405,79.568H34.595c-11.465,0-20.757,9.292-20.757,20.757s9.292,20.757,20.757,20.757h442.811
			c11.465,0,20.757-9.292,20.757-20.757S488.87,79.568,477.405,79.568z"
    />
  </svg>
);

export const Close: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
    fill="currentColor"
    {...props}
  >
    <path
      d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
    />
  </svg>
);

export interface ProductProps {
  product?: CardProps;
  quantity?: number;
}

export interface CartProps {
  data?: CardProps[];
  cart?: {
    id?: string;
    quantity?: number;
    product?: CardProps;
  }[];
}

const Cart: FC<CartProps> = () => {
  const [cart, setCart] = useLocalStorage<ProductProps[]>("cart", []);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const [sumPrice, setSumPrice] = useState<number>(0);
  const [sumProduct, setSumProduct] = useState<number>(0);
  const [items, setItems] = useState<ProductProps[]>([]);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  useEffect(() => {
    setSumPrice(
      cart
        .map((item) => item.quantity * item.product.price)
        .reduce((x, y) => x + y, 0)
    );
    setSumProduct(cart.map((item) => item.quantity).reduce((x, y) => x + y, 0));
  }, [cart]);

  const onCart = useCallback(() => setIsOpen(!isOpen), [isOpen]);

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
    <Flex>
      <Flex
        onClick={onCart}
        sx={{
          px: 15,
          height: 70,
          width: "100%",
          position: "relative",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.3s",
          text: {
            opacity: sumProduct === 0 ? 0 : 1,
            transform: sumProduct === 0 ? "scale(0)" : "scale(1)",
          },
          ":hover": {
            text: { bg: "productType1" },
            svg: { fill: "productType1", transition: "0.3s" },
          },
        }}
      >
        <Text as="text" pt={1} variant="sumProduct">
          {sumProduct}
        </Text>

        <CartIcon width={30} height={30} />
      </Flex>
      {isOpen && (
        <Flex
          sx={{
            position: "fixed",
            bg: "black",
            opacity: 0.4,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 99,
          }}
        />
      )}
      <Flex
        ref={ref}
        sx={{
          position: "fixed",
          flexDirection: "column",
          transition: "0.4s",
          borderRadius: "4px 0 0 4px",
          bg: "white",
          top: 0,
          right: isOpen ? 0 : -430,
          width: 400,
          bottom: 0,
          boxShadow: "#959da5 0px 12px 24px 0px",
          zIndex: 100,
        }}
      >
        <Grid p={20} variant="cartLabel" columns={"9fr 1fr"}>
          <Flex
            sx={{
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Text variant="cartLabel">IN CART: {sumProduct} PRODUCT</Text>

            <Text variant="cartLabel1">
              TOTAL PRICE: {formatCurrency(sumPrice)}
              <Text as="sup">Đ</Text>
            </Text>
          </Flex>
          <Flex
            mt={3}
            mb={25}
            onClick={onCart}
            sx={{
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.3s",
              ":hover": {
                svg: { fill: "productType1" },
              },
            }}
          >
            <Close width={15} height={15} />
          </Flex>
        </Grid>
        <Flex
          p={20}
          sx={{
            flexDirection: "column",
            overflowY: "auto",
            "::-webkit-scrollbar": {
              width: 7,
            },
            "::-webkit-scrollbar-thumb": {
              bg: "productType1",
              borderRadius: 5,
            },
          }}
        >
          {items.map((item, index) => (
            <Flex p="0 9px 20px 0" key={item.product.id}>
              <Flex
                sx={{
                  p: 3,
                  width: 90,
                  height: 90,
                  borderRadius: 5,
                  border: "1px solid #d3d1d1",
                  overflow: "hidden",
                }}
              >
                <Image
                  variant="cartImage"
                  src={item.product.image}
                  alt="Product"
                />
              </Flex>
              <Flex
                ml={12}
                sx={{
                  flex: 1,
                  flexDirection: "column",
                }}
              >
                <Flex
                  sx={{
                    justifyContent: "space-between",
                    svg: {
                      fill: "productType2",
                      transition: "0.3s",
                      cursor: "pointer",
                      ":hover": {
                        fill: "productType1",
                      },
                    },
                  }}
                >
                  <Text variant="cartItemLabel">{item.product.name}</Text>
                  <Delete
                    width={20}
                    height={20}
                    onClick={() => onDelete(index)}
                  />
                </Flex>

                <Flex
                  sx={{
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Flex>
                    <Button variant="cartItem" onClick={() => onMinus(index)}>
                      -
                    </Button>
                    <Text variant="cartItemQuantity" my="auto">
                      {item.quantity}
                    </Text>
                    <Button variant="cartItem" onClick={() => onPlus(index)}>
                      +
                    </Button>
                  </Flex>
                  <Flex
                    sx={{
                      flex: 1,
                      flexDirection: "column",
                      textAlign: "right",
                    }}
                  >
                    {item.product.priceOld && (
                      <Text variant="cartItemPriceOld">
                        {formatCurrency(item.product.priceOld * item.quantity)}
                        <Text as="sup">đ</Text>
                      </Text>
                    )}
                    <Text variant="cartItemPrice">
                      {formatCurrency(item.product.price * item.quantity)}
                      <Text as="sup">đ</Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Grid columns={2} variant="cartButton">
          <Button p="20px 30px" variant="primary" onClick={onCart}>
            GO TO CART
          </Button>
          <Button variant="secondary" onClick={onCart}>
            CHECK OUT
          </Button>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default memo(Cart);
