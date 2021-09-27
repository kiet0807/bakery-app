import { Flex, Text } from "@theme-ui/components";
import React, {
  FC,
  memo,
  SVGProps,
  useCallback,
  useRef,
  useState,
} from "react";
import Search from "./Search";
import Cart, { CartProps } from "./Cart";
import { ItemProps } from "./Menu";
import { ElementItem } from "./ElementsCard";
import { Address, Mail } from "./Header";
import Link from "next/link";
import { address } from "../pages";
import { Button } from "theme-ui";
import useOnClickOutside from "../hooks/useOnClickOutside";

const ThreePoint: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="408px"
    height="408px"
    viewBox="0 0 408 408"
    fill="currentColor"
    {...props}
  >
    <path
      d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
			s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
			S232.05,306,204,306z"
    />
  </svg>
);

interface NavProps extends CartProps {
  items: ItemProps[];
  elements: ElementItem;
}

const Nav: FC<NavProps> = ({
  items,
  data,
  cart,
  onMinus,
  onPlus,
  onDelete,
  elements,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const onAddress = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <Flex
      sx={{
        zIndex: 98,
        height: 70,
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        boxShadow: "0 3px 5px #c5c1c1",
      }}
    >
      <Flex
        bg="white"
        sx={{
          position: "relative",
          width: "100%",
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            width: "100%",
            maxWidth: 1170,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Search
            items={items}
            elements={elements}
            sx={{
              flex: 1,
              zIndex: 99,
            }}
          />
          <Cart
            data={data}
            cart={cart}
            onMinus={onMinus}
            onPlus={onPlus}
            onDelete={onDelete}
          />
          <Flex
            ref={ref}
            sx={{
              position: "relative",
              transform: [
                "scale(1)",
                "scale(1)",
                "scale(1)",
                "scale(1)",
                "scale(0)",
              ],
              opacity: [1, 1, 1, 1, 0],
              transition: "0.3s",
              height: "100%",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex
              onClick={onAddress}
              sx={{
                px: 15,
                height: 70,
                width: "100%",
                alignItems: "center",
                ":hover": {
                  svg: { fill: "productType1", transition: "0.3s" },
                },
                ":active": {
                  transform: "scale(0.9)",
                },
                svg: {
                  width: [22, 22, 22, 22, 0],
                },
              }}
            >
              <ThreePoint height={22} fill="productType2" />
            </Flex>
            <Flex
              sx={{
                p: 15,
                bg: "white",
                position: "absolute",
                flexDirection: "column",
                top: "100%",
                right: 0,
                width: 270,
                boxShadow: "#959da5 0px 12px 24px 0px",

                transform: isOpen ? "scaleX(1)" : "scaleX(0)",
                transition: "0.3s",
              }}
            >
              <Link href="/">
                <Flex
                  sx={{
                    alignItems: "center",
                    transition: "0.3s",
                    color: "productType2",
                    cursor: "pointer",
                    justifyContent: "space-between",
                    ":hover": {
                      color: "productType1",
                    },
                  }}
                >
                  <Flex sx={{ flex: 1, justifyContent: "center" }}>
                    <Address width={35} height={35} />
                  </Flex>
                  <Flex sx={{ flexDirection: "column" }}>
                    <Text variant="address">{address.street}</Text>
                    <Text variant="address">{address.address}</Text>
                  </Flex>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  sx={{
                    width: "100%",
                  }}
                >
                  <Button
                    mt={10}
                    py={10}
                    sx={{
                      width: "100%",
                    }}
                    variant="primary"
                  >
                    <Flex
                      sx={{
                        justifyContent: "center",
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
      </Flex>
    </Flex>
  );
};

export default memo(Nav);
