import { Flex, Text } from "@theme-ui/components";
import { useRouter } from "next/router";
import React, { FC, memo, useCallback, useState } from "react";

interface ItemMenuProps {
  id?: string | number;
  label?: string;
  content?: string[];
}
const ItemMenu: FC<ItemMenuProps> = ({ label, content, id }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const onOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Text
        onClick={onOpen}
        variant="MenuLabel"
        sx={{
          bg: isOpen && content ? "productType1" : "white",
          color:
            isOpen && content
              ? "white"
              : router.pathname === "/" && id === "1"
              ? "productType1"
              : "productType2",
        }}
      >
        {label}
      </Text>
      {isOpen && (
        <Flex
          sx={{
            flexDirection: "column",
          }}
        >
          {content?.map((item, index) => (
            <Text variant="MenuContent" key={index}>
              {item}
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default memo(ItemMenu);
