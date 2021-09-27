import { BoxProps, Flex, Text, Image, Label } from "@theme-ui/components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  FC,
  memo,
  SVGProps,
  useCallback,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { Close } from "./Cart";
import ElementsCard, { ElementItem } from "./ElementsCard";
import ItemMenu from "./ItemMenu";

const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 451.847 451.847"
    fill="currentColor"
    {...props}
  >
    <path
      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
    />
  </svg>
);

const MenuMobile: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 612 612"
    fill="currentColor"
    {...props}
  >
    <path
      d="M581.4,520.199H30.6c-16.891,0-30.6,13.709-30.6,30.6C0,567.691,13.709,581.4,30.6,581.4h550.8
				c16.891,0,30.6-13.709,30.6-30.602C612,533.908,598.291,520.199,581.4,520.199z M30.6,91.799h550.8
				c16.891,0,30.6-13.708,30.6-30.6c0-16.892-13.709-30.6-30.6-30.6H30.6C13.709,30.6,0,44.308,0,61.2
				C0,78.091,13.709,91.799,30.6,91.799z M581.4,275.399H30.6C13.709,275.399,0,289.108,0,306s13.709,30.6,30.6,30.6h550.8
				c16.891,0,30.6-13.709,30.6-30.6S598.291,275.399,581.4,275.399z"
    />
  </svg>
);

export interface ItemProps {
  label: string;
  id?: string;
  content?: string[];
}

export interface MenuProps extends BoxProps {
  items?: ItemProps[];
  elements?: ElementItem;
}

const Menu: FC<MenuProps> = ({ items, elements, ...BoxProps }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Flex {...BoxProps}>
      {/* Mobile Menu */}
      <Flex ref={ref}>
        <Flex
          onClick={handleMenu}
          sx={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            opacity: [1, 1, 1, 1, 0],
            transform: [
              "scale(1)",
              "scale(1)",
              "scale(1)",
              "scale(1)",
              "scale(0)",
            ],
            transition: "0.5s",
            cursor: "pointer",
            ":hover": {
              svg: { fill: "productType1" },
            },
          }}
        >
          <Flex
            sx={{
              p: 15,
              position: "absolute",
              left: 0,
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "rotate(-0.3turn)" : "none",
              transition: "0.3s",
            }}
          >
            <MenuMobile width={25} height={25} />
          </Flex>
          <Flex
            sx={{
              p: 15,
              position: "absolute",
              left: 0,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "none" : "rotate(0.3turn)",
              transition: "0.3s",
            }}
          >
            <Close width={20} height={20} />
          </Flex>
        </Flex>
        <Flex
          sx={{
            bg: "white",
            position: "fixed",
            top: [72, 72, 72, 72, 192],
            bottom: 0,
            width: 300,
            transform: ["none", "none", "none", "none", "translateX(-350px)"],
            flexDirection: "column",
            transition: "0.3s",
            borderRadius: "4px 0 0 4px",
            left: isOpen ? 0 : -350,
            boxShadow: "#959da5 0px 12px 24px 0px",
            zIndex: 50,
          }}
        >
          <Flex
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
            {items.map((item) => (
              <Flex key={item.id}>
                {item.id !== "6" ? (
                  <ItemMenu
                    label={item.label}
                    content={item.content}
                    id={item.id}
                  />
                ) : (
                  <Flex
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <ItemMenu
                      label="ELEMENT"
                      content={elements.element}
                      id={item.id}
                    />
                    <ItemMenu
                      id={item.id}
                      label="ADDITIONAL PAGE"
                      content={elements.additional}
                    />
                    <ItemMenu label="WELCOME" id={item.id} />
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>
          <Link href="/">
            <Image
              sx={{
                mt: "auto",
                bg: "white",
                height: 70,
                objectFit: "scale-down",
                width: "100%",
                borderTop: "1px solid #e6e6e6",
                userSelect: "none",
                cursor: "pointer",
                zIndex: 50,
              }}
              src="images/logo.png"
            />
          </Link>
        </Flex>
      </Flex>
      {/* Window Menu  */}
      <Flex
        sx={{
          height: 70,
          transition: "0.3s",
          opacity: [0, 0, 0, 0, 1],
          transform: [
            "scale(0)",
            "scale(0)",
            "scale(0)",
            "scale(0)",
            "scale(1)",
          ],
        }}
      >
        {items.map((item) => (
          <Flex
            mx={20}
            key={item.id}
            sx={{
              transition: "0.3s",
              position: "relative",
              alignItems: "center",
              ":before": {
                content: "''",
                position: "absolute",
                left: -20,
                top: 0,
                height: "8px",
                width: item.content ? "calc(100% + 20px)" : "calc(100% + 40px)",
                bg:
                  router.pathname === "/" && item.id === "1"
                    ? "productType1"
                    : "transparent",
                transition: "0.6s",
              },
              ":hover": {
                color: "productType1",
                ":before": {
                  left: 0,
                  width: item.content ? "calc(100% - 20px)" : "100%",
                  bg: "productType1",
                },
                ".popover": {
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          >
            <Text variant="popupLabel">{item.label}</Text>
            {item.content && (
              <Flex ml={5}>
                <Arrow width={10} height={10} />
              </Flex>
            )}
            {item.content && (
              <Flex
                className="popover"
                bg="white"
                sx={{
                  position: "absolute",
                  opacity: 0,
                  top: "100%",
                  left: item.id === "6" ? "-540%" : -40,
                  transform: "scale(0)",
                  transition: "0.4s",
                  boxShadow: "0 10px 25px 5px rgb(1 3 4 / 20%)",
                  zIndex: 2,
                }}
              >
                {item.id === "6" ? (
                  <ElementsCard elements={elements} />
                ) : (
                  <Flex
                    p="40px 40px 20px"
                    sx={{
                      width: 250,
                      flexDirection: "column",
                    }}
                  >
                    {item.content.map((x, index) => (
                      <Text key={index} variant="popupContent">
                        <Link href="#">{x}</Link>
                      </Text>
                    ))}
                  </Flex>
                )}
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default memo(Menu);
