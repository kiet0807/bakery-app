import { Flex, Grid, Text, Image, BoxProps } from "@theme-ui/components";
import Link from "next/link";
import React, { FC, memo, SVGProps } from "react";

const Element: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    enableBackground="new 0 0 24 24"
    height="512"
    viewBox="0 0 24 24"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m14 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m14 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m14 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m23 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m23 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
    <path d="m23 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" />
  </svg>
);

const Cake: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 469.333 469.333"
    fill="currentColor"
    {...props}
  >
    <path
      d="M234.56,128c23.573,0,42.667-19.093,42.667-42.667c0-8-2.24-15.573-6.08-21.973L234.56,0l-36.587,63.36
				c-3.84,6.4-6.08,13.973-6.08,21.973C191.893,108.907,210.987,128,234.56,128z"
    />
    <path
      d="M362.56,192L362.56,192H255.893v-42.667h-42.667V192H106.56c-35.307,0-64,28.693-64,64v32.853
				c0,23.04,18.773,41.813,41.813,41.813c11.2,0,21.653-4.373,29.547-12.267l45.653-45.547l45.547,45.44
				c15.787,15.787,43.307,15.787,59.093,0l45.653-45.44l45.547,45.44c7.893,7.893,18.347,12.267,29.547,12.267
				c23.04,0,41.813-18.773,41.813-41.813V256C426.56,220.693,397.867,192,362.56,192z"
    />
    <path
      d="M332.587,341.013L332.587,341.013l-22.933-22.933l-23.04,22.933c-27.84,27.84-76.48,27.84-104.32,0L159.36,318.08
				l-23.04,22.933c-13.76,13.973-32.213,21.653-51.947,21.653c-15.467,0-29.867-4.907-41.813-13.12V448
				c0,11.733,9.6,21.333,21.333,21.333h341.333c11.733,0,21.333-9.6,21.333-21.333v-98.453c-11.947,8.213-26.24,13.12-41.813,13.12
				C365.013,362.667,346.56,354.987,332.587,341.013z"
    />
  </svg>
);

const Page: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 296.999 296.999"
    fill="currentColor"
    {...props}
  >
    <path
      d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543
				v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382
				C115.322,40.849,70.226,35.107,45.432,35.049z"
    />
    <path
      d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0
				c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779
				c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"
    />
    <path
      d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344
				c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427
				C297,76.568,292.232,71.801,286.373,71.801z"
    />
    <path
      d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301
				c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342
				C30.49,232.13,18.332,219.963,18.332,205.042z"
    />
  </svg>
);
export interface ElementItem {
  element: string[];
  additional: string[];
  welcome: string;
}

interface ElementsProps extends BoxProps {
  elements?: ElementItem;
}

const CardElements: FC<ElementsProps> = ({ elements, ...BoxProps }) => {
  return (
    <Grid
      p={50}
      variant="elementCard"
      columns={[1, 1, 1, 1, "1.4fr 1fr 0.9fr"]}
      {...BoxProps}
    >
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Flex
          pb={20}
          mb={20}
          sx={{
            alignItems: "center",
            fontSize: 1,
            padding: "0px 0px 16px",
            textAlign: "left",
            borderBottom: "1px solid #e1e1e1",
          }}
        >
          <Element width={25} height={30} fill="#c14679" />

          <Text ml={15} variant="ElementLabel">
            ELEMENT
          </Text>
        </Flex>
        <Grid mb={20} columns={2}>
          {elements.element.map((item, index) => (
            <Text mt={20} variant="ElementContent" key={index}>
              <Link href="#" passHref>
                {item}
              </Link>
            </Text>
          ))}
        </Grid>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Flex
          pb={20}
          mb={20}
          sx={{
            alignItems: "center",
            fontSize: 1,
            padding: "0px 0px 16px",
            textAlign: "left",
            borderBottom: "1px solid #e1e1e1",
          }}
        >
          <Page width={30} height={30} fill="#c14679" />
          <Text ml={15} variant="ElementLabel">
            ADDITIONAL PAGE
          </Text>
        </Flex>
        <Grid mb={20}>
          {elements.additional.map((item, index) => (
            <Text mt={20} variant="ElementContent" key={index}>
              <Link href="#" passHref>
                {item}
              </Link>
            </Text>
          ))}
        </Grid>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Flex
          pb={20}
          mb={20}
          sx={{
            alignItems: "center",
            fontSize: 1,
            padding: "0px 0px 16px",
            textAlign: "left",
            borderBottom: "1px solid #e1e1e1",
          }}
        >
          <Cake width={30} height={30} fill="#c14679" />
          <Text ml={15} variant="ElementLabel">
            WELCOME
          </Text>
        </Flex>
        <Link href="#">
          <Image mt={20} variant="element" src={elements.welcome} />
        </Link>
      </Flex>
    </Grid>
  );
};

export default memo(CardElements);
