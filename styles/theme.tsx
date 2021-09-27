import { Theme } from "theme-ui";

export const theme: Theme = {
  breakpoints: ["550px", "768px", "992px", "1060px", "1441px", "1920px"],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 42, 52, 72],
  lineHeights: [
    "16px",
    "18px",
    "22px",
    "26px",
    "32px",
    "42px",
    "52px",
    "62px",
    "82px",
  ],
  colors: {
    productType1: "#c14679",
    productType4: "#fccde0",
    productType5: "#eeaac5",
    productType3: "#993860",
    productType2: "#151515",
    productButton: "#a30e4c",
    productPriceOld: "#777777",
    text: "#10182B",
    textSecondary: "#909090",
    favorite: "#FC5C63",
    black25: "rgba(0, 0, 0, 0.25)",
    border: "#D8D8D8",
    lightGray1: "#ABAFB8",
    lightGray2: "#EFEFF0",
    lightGray3: "#D4D5D6",
    lightGray4: "#FAFAFA",
    premium: "#FCA120",
    red: "#ED1C24",
    green: "#0E8F14",
    yellow: "#FFBE1E",
    description: "#979797",
    placeHolder: "#8F9BBA",
    modes: {
      dark: {},
    },
  },
  fonts: {
    body: "SVN-Gilroy, sans-serif",
  },
  space: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
  radii: [],
  fontWeights: {
    bold: "bold",
    headline: 600,
  },
  shadows: { small: "0 6px 12px rgb(0 0 0 / 16%)" },
  cards: {
    productCard: {
      p: 20,
      width: 270,
      height: 400,
      bg: "white",
      display: "flex",
      flexDirection: "column",
      borderRadius: 6,
      position: "relative",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      boxShadow: "#959da5 0px 12px 24px 0px",
      transition: "0.3s",
      ":hover": {
        height: 460,
        transform: "translateY(-15px)",
        Button: {
          opacity: 1,
          transform: "scale(1)",
        },
      },
    },
  },
  text: {
    OfferLabel: {
      fontSize: [18, 16, 20, 24, 24],
      fontWeight: 600,
      letterSpacing: "2px",
      lineHeight: "33px",
      color: "productType2",
    },

    OfferDescription: {
      pt: 15,
      fontSize: [12, 12, 12, 15, 15],
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: "24px",
      color: "productType2",
      opacity: 0.8,
    },

    MenuContent: {
      p: "15px 5px 15px 25px",
      color: "productType2",
      bg: "productType4",
      fontSize: 1,
      fontWeight: "headline",
      letterSpacing: "1.4px",
      transition: "0.3s",
      cursor: "pointer",
      userSelect: "none",
      ":hover": {
        bg: "productType5",
        color: "white",
      },
    },
    MenuLabel: {
      p: 15,
      fontSize: 1,
      userSelect: "none",
      fontWeight: "headline",
      letterSpacing: "1.4px",
      transition: "0.3s",
      cursor: "pointer",
      ":hover": {
        bg: "productType1",
        color: "white",
      },
    },
    productType: {
      color: "white",
      fontSize: 1,
      fontWeight: "headline",
      textTransform: "uppercase",
      position: "absolute",
      borderRadius: 6,
      top: 0,
      right: 0,
      p: "5px 12px",
    },
    productName: {
      color: "productType2",
      fontSize: 3,
      fontWeight: 500,
      lineHeight: 4,
      textTransform: "uppercase",
    },
    productDescription: {
      py: 3,
      color: "productType2",
      fontSize: 15,
      lineHeight: 2,
    },
    productPriceOld: {
      fontSize: 2,
      color: "productPriceOld",
      textDecoration: "line-through",
    },
    productPrice: {
      fontSize: 2,
      color: "productType1",
      fontWeight: 700,
    },
    address: {
      lineHeight: 3,
      fontSize: 1,
      letterSpacing: 0.3,
      fontWeight: "headline",
    },
    popupLabel: {
      fontSize: 1,
      fontWeight: "headline",
      letterSpacing: "2px",
      lineHeight: "20px",
      transition: "0.3s",
      py: 25,
    },
    popupLabel1: {
      fontSize: 1,
      position: "relative",
      fontWeight: "headline",
      letterSpacing: "2px",
      lineHeight: "20px",
      transition: "0.3s",
      py: 25,
      alignItems: "center",
      ":before": {
        content: "''",
        position: "absolute",
        left: -20,
        top: 0,
        height: "8px",
        width: "calc(100% + 40px)",
        bg: "transparent",
        transition: "0.6s",
      },
      ":hover": {
        color: "productType1",
        ":before": {
          bg: "productType1",
          left: 0,
          width: "100%",
        },
      },
    },
    popupContent: {
      color: "productType2",
      mb: 20,
      fontSize: 1,
      letterSpacing: "1px",
      lineHeight: "25.2px",
      textAlign: "left",
      ":hover": {
        color: "productType1",
      },
    },
    ElementLabel: {
      fontSize: 1,
      color: "productType2",
      fontWeight: "headline",
      letterSpacing: "2px",
      lineHeight: "20px",
      textAlign: "left",
    },
    ElementContent: {
      fontSize: 1,
      lineHeight: "20px",
      color: "productType2",
      letterSpacing: "1px",
      ":hover": {
        color: "productType1",
      },
    },
    cartLabel: {
      color: "productType1",
      fontWeight: "headline",
      letterSpacing: "1.5px",
      lineHeight: "25.6px",
    },
    cartLabel1: {
      color: "productType2",
      fontSize: 3,
      fontWeight: "headline",
      letterSpacing: "1.5px",
      lineHeight: "28.8px",
    },
    cartItemQuantity: {
      width: 36,
      textAlign: "center",
      color: "productType2",
      fontSize: 3,
      fontWeight: "headline",
      letterSpacing: "1.5px",
      lineHeight: "28.8px",
    },
    cartItemLabel: {
      color: "productType2",
      fontWeight: "headline",
      lineHeight: "22.4px",
    },
    cartItemPrice: {
      color: "productType2",
      fontSize: 2,
      fontWeight: "700",
      lineHeight: "22.4px",
    },
    cartItemPriceOld: {
      color: "productType2",
      opacity: 0.6,
      fontSize: 0,
      lineHeight: "22.4px",
      textDecoration: "line-through",
    },
    sumProduct: {
      color: "white",
      textAlign: "center",
      fontSize: 1,
      fontWeight: 600,
      position: "absolute",
      width: 25,
      height: 25,
      borderRadius: 99,
      bg: "productType2",
      top: -5,
      right: 0,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s",
    },
    ImageLabel: {
      fontFamily: "'Great Vibes', cursive",
      userSelect: "none",
      fontSize: [80, 80, 100, 100, 100],
      color: "productType1",
    },

    ImageContent: {
      color: "productType2",
      letterSpacing: "10px",
      userSelect: "none",
      fontSize: [26, 26, 36, 36, 36],
      position: "relative",
      fontWeight: 700,
      pl: [0, 0, 85, 85, 85],
      ":before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        height: 3,
        width: [0, 0, 60, 60, 60],
        bg: "productType2",
      },
    },
    ImageDescription: {
      fontSize: [16, 16, 18, 18, 18],
      color: "productType2",
      my: 30,
      opacity: 0.7,
      letterSpacing: "2px",
    },
    ImageLabel1: {
      fontFamily: "'Great Vibes', cursive",
      userSelect: "none",
      letterSpacing: "2px",
      fontSize: 32,
      color: "productType1",
    },
    ImageContent1: {
      userSelect: "none",
      fontSize: 20,
      color: "productType2",
      opacity: 0.7,
      m: "20px auto",
      lineHeight: 1.6,
    },
    offerLabel1: {
      fontSize: [40, 40, 48, 55, 55],
      transition: "0.3s",
      color: "productType2",
      textAlign: "center",
      fontWeight: 600,
      fontFamily: "sans-serif",
      letterSpacing: "2px",
    },
  },
  grids: {
    elementCard: {
      position: "relative",
      bg: "white",
      minWidth: 1171,
    },
    cartLabel: {
      borderBottom: "1px solid #e6e6e6",
    },
    cartButton: {
      mt: "auto",
      gap: 10,
      p: 20,
      width: "100%",
      height: 100,
      borderTop: "1px solid #e6e6e6",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 600,
      mb: 15,
    },
    search: {
      border: "none",
      outline: "none",
      transition: "0.3s",
      lineHeight: "20px",
      px: 25,
      py: 25,
      fontSize: 1,
    },
    textarea: {
      variant: "forms.input",
    },
    select: {
      borderColor: "border",
      "&:focus": {
        boxShadow: "0 0 0 1px rgb(0 132 137 / 20%)",
        outline: "none",
      },
      borderRadius: 3,
      minHeight: 48,
      transition: "0.3s",
      px: 11,
      py: 2,
      fontSize: 1,
      width: "100%",
    },
  },
  buttons: {
    OfferButton: {
      bg: "white",
      fontSize: 14,
      position: "relative",
      transition: "0.3s",
      fontWeight: 600,
      letterSpacing: "2px",
      cursor: "pointer",
      opacity: 0.6,
      color: "productType2",
      ":before": {
        content: "''",
        position: "absolute",
        transition: "0.2s",
        transform: "scaleX(0.6)",
        bottom: 0,
        left: 0,
        border: "2px solid transparent",
        borderBottomColor: "productType2",
        height: "calc(100% - 4px)",
        width: "calc(100% - 4px)",
      },
      ":hover": {
        bg: "productType1",
        color: "white",
      },
    },

    productButton: {
      width: 50,
      height: 50,
      bg: "white",
      borderRadius: 99,
      transition: "0.5s",
      opacity: 0,
      transform: "scale(0)",
      cursor: "pointer",
      display: "flex",
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      ":after": {
        content: "''",
        width: 50,
        height: 50,
        position: "absolute",
        top: 0,
        right: 0,
        transition: "0.4s",
        bg: "productType1",
        borderRadius: 99,
        cursor: "pointer",
        boxShadow: "#c7c7c7 0px 12px 24px 0px",
        zIndex: -1,
      },
      svg: {
        transition: "0.3s",
        objectFit: "scale-down",
      },

      ":hover": {
        ":after": {
          transform: "scale(1.2)",
        },
        svg: {
          transform: "scale(1.2)",
        },
      },
      ":active": {
        ":after": {
          transform: "scale(1)",
        },
        svg: {
          transform: "scale(1)",
        },
      },
    },
    touchButton: {
      justifyContent: "center",
      alignItems: "center",
      bg: "transparent",
      height: "100%",
      cursor: "pointer",
      borderRadius: 4,
      position: "relative",
      border: "2px solid",
      borderColor: "productType1",
      color: "productType2",
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: 1.4,
      transition: "all 0.3s linear",
      p: "11px 25px",
      overflow: "hidden",
      ":after": {
        position: "absolute",
        bg: "productType3",
        content: "''",
        p: "180px 180px",
        transition: "all 0.3s linear",
        top: -155,
        right: -85,
        borderRadius: 9999,
        zIndex: -1,
      },
      ":hover": {
        color: "white",
        bg: "productType1",
        ":after": {
          transform: "scale(0)",
          zIndex: 0,
        },
      },
    },
    searchButton: {
      bg: "transparent",
      cursor: "pointer",
      svg: {
        transition: "0.3s",
        fill: "productType2",
        opacity: 0.5,
      },
      ":hover": {
        svg: { fill: "productType1", opacity: 1 },
      },
      ":active": {
        svg: { transform: "scale(0.8)" },
      },
    },

    cartItem: {
      width: 36,
      height: 36,
      borderRadius: 6,
      border: "1px solid #d3d1d1",
      bg: "white",
      color: "productType2",
      transition: "0.3s",
      fontSize: 4,
      cursor: "pointer",
      ":hover": {
        color: "productType1",
      },
      ":active": {
        transform: "scale(0.8)",
      },
    },
    primary: {
      borderRadius: 4,
      bg: "transparent",
      color: "productType2",
      border: "2px solid",
      borderColor: "productType1",
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: "1.4px",
      textAlign: "center",
      transition: "all 0.3s ease-in-out",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      zIndex: 1,
      ":after": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -50%, 0) scale(1)",
        padding: "55% 55%",
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "all 0.3s ease-in-out",
        zIndex: -1,
        bg: "white",
      },
      ":hover": {
        bg: "productType1",
        color: "white",
        ":after": {
          transform: "translate3d(-50%, -50%, 0) scale(0)",
        },
      },
      ":active": {
        transform: "scale(0.9)",
      },
    },
    secondary: {
      bg: "productType1",
      color: "white",
      borderRadius: 4,
      border: "2px solid",
      borderColor: "productType1",
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: "1.4px",
      textAlign: "center",
      transition: "all 0.3s ease-in-out",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      zIndex: 1,
      ":after": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -50%, 0) scale(1)",
        padding: "55% 55%",
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "all 0.3s ease-in-out",
        zIndex: -1,
        bg: "productType1",
      },
      ":hover": {
        bg: "productType3",
        ":after": {
          transform: "translate3d(-50%, -50%, 0) scale(0)",
        },
      },
      ":active": {
        transform: "scale(0.9)",
      },
    },
    select: {
      variant: "buttons.base",
      bg: "lightGray4",
      color: "text",
      borderColor: "lightGray4",
    },
    selected: {
      variant: "buttons.primary",
      filter: "none",
    },
    premium: {
      variant: "buttons.base",
      bg: "premium",
      color: "lightGray4",
      borderColor: "premium",
    },
    dropdown: {
      variant: "buttons.base",
      background: "white",
      borderColor: "border",
      color: "text",
    },
    tag: {
      background: "secondary",
      borderRadius: 56,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "secondary",
      fontSize: 2,
      lineHeight: 1,
      color: "lightGray4",
      py: 15,
      px: 40,
    },
    requestRed: {
      color: "lightGray4",
      background: "red",
      fontSize: 3,
      lineHeight: 2,
      borderRadius: 20,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "red",
      cursor: "pointer",
      transition: "0.3s",
      ":hover": {
        filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25))",
      },
    },
    requestGreen: {
      variant: "buttons.requestRed",
      background: "green",
      borderColor: "green",
    },
    requestGrey: {
      variant: "buttons.requestRed",
      background: "secondary",
      borderColor: "secondary",
    },
    rectangle1: {
      borderRadius: 5,
      bg: "#3F680B",
      borderWidth: 1,
      borderColor: "secondary",
      borderStyle: "solid",
      p: 8,
      fontSize: 2,
      lineHeight: 1,
      color: "lightGray4",
      ":hover": {
        filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25))",
      },
      flexShrink: 0,
    },
    time: {
      variant: "buttons.base",
      borderWidth: 1,
      borderColor: "secondary",
      borderRadius: 20,
      px: 20,
      py: 10,
      bg: "white",
      color: "text",
      cursor: "pointer",
      transition: "0.3s",
      ":hover": {
        borderColor: "primary",
      },
    },
    timeActive: {
      variant: "buttons.time",
      borderColor: "primary",
      color: "primary",
    },
  },
  images: {
    productImage: {
      objectFit: "scale-down",
      width: 200,
      height: 200,
    },
    element: {
      objectFit: "cover",
      width: 325,
      height: 225,
      cursor: "pointer",
      m: 14,
      border: "1px solid #e6e6e6",
    },
    cartImage: {
      width: 76,
      height: 76,
      transition: "0.3s",
      ":hover": {
        transform: "scale(1.1)",
      },
    },
    indexImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    indexImage1: {
      objectFit: "cover",
      width: 1170,
      height: "100%",
    },
  },
  messages: {
    error: {
      borderLeftColor: "red",
      p: 10,
      color: "red",
    },
  },
  layout: {
    container: {
      maxWidth: [null, 750, 970, 1170, 1441],
      mx: "auto",
      px: 25,
    },
  },
  styles: {
    hr: {
      color: "border",
    },
  },
  badges: {
    medium: {
      bg: "secondary",
      fontSize: 2,
      lineHeight: 1,
      borderRadius: 56,
      borderWidth: 1,
      borderColor: "secondary",
      borderStyle: "solid",
      py: 13,
      px: 9,
      flexShrink: 0,
    },
  },
};