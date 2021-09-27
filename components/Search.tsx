import { Button, Flex, Input } from "@theme-ui/components";
import React, { FC, memo, SVGProps, useCallback, useState } from "react";
import Menu, { MenuProps } from "./Menu";

const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    xmlSpace="preserve"
    fill="#151515"
    {...props}
  >
    <path d="M90.4,84L75.8,69.5C87.2,54.9,86,34.1,72.9,21c-6.9-6.9-16.1-10.7-25.9-10.7c-9.8,0-19,3.8-25.9,10.7  c-6.9,6.9-10.7,16.1-10.7,25.9c0,9.8,3.8,19,10.7,25.9c6.9,6.9,16.1,10.7,25.9,10.7c8.1,0,16.1-2.7,22.5-7.8L84,90.4  c0.9,0.9,2,1.3,3.2,1.3c1.2,0,2.3-0.5,3.2-1.3C92.2,88.7,92.2,85.8,90.4,84z M74.6,46.9c0,7.4-2.9,14.3-8.1,19.5  c-5.2,5.2-12.2,8.1-19.5,8.1s-14.3-2.9-19.5-8.1c-5.2-5.2-8.1-12.2-8.1-19.5c0-7.4,2.9-14.3,8.1-19.5s12.2-8.1,19.5-8.1  c7.4,0,14.3,2.9,19.5,8.1C71.7,32.6,74.6,39.5,74.6,46.9z" />
  </svg>
);
const Close: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    y="0px"
    viewBox="0 0 511.995 511.995"
    fill="#151515"
    {...props}
  >
    <path
      d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005
			s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874
			C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0
			c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0
			C493.435,187.359,493.435,324.651,409.08,409.006z"
    />

    <path
      d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046
			c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02
			c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046
			c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111
			c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"
    />
  </svg>
);

const Search: FC<MenuProps> = ({ items, elements, ...BoxProps }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleSearch = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Flex {...BoxProps}>
      <Menu
        sx={{
          width: isOpen && 0,
          opacity: isOpen && 0,
        }}
        items={items}
        elements={elements}
      />
      <Flex
        mx={10}
        as="form"
        sx={{
          transition: isOpen ? "0.5s" : "none",
          width: isOpen ? "70%" : 0,
          opacity: isOpen ? 1 : 0,
          position: "relative",
          alignItems: "center",
          justifyContent: "space-between",
          ":before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            height: "8px",
            bg: "productType1",
            width: 95,
            transition: "0.6s",
          },
          ":hover": {
            ":before": {
              width: 45,
              left: 25,
            },
          },
        }}
        onSubmit={(e) => console.log(e.preventDefault)}
      >
        <Input name="productID" variant="search" placeholder="Search" />
        <Button variant="searchButton" type="submit" ml={-50} mt={5}>
          <SearchIcon width={35} height={35} fill="productType2" />
        </Button>
      </Flex>

      <Flex
        ml="auto"
        onClick={handleSearch}
        sx={{
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
          transition: "0.3s",
          ":hover": {
            svg: { fill: "productType1" },
          },
        }}
      >
        <Flex
          mt={4}
          sx={{
            position: "absolute",
            right: 5,
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "rotate(-0.3turn)" : "none",
            transition: "0.3s",
          }}
        >
          <SearchIcon width={35} height={35} />
        </Flex>
        <Flex
          sx={{
            position: "absolute",
            right: 5,
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "none" : "rotate(0.3turn)",
            transition: "0.3s",
          }}
        >
          <Close width={27} height={27} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Search);
