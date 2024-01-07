import { Image } from "@components/image";
import { Heading, Text } from "@components/typography";
import type { Config } from "@measured/puck";

type Props = {
  Text: { text: string };
  Heading: { text: string };
  Image: { src: string; alt: string };
};

export const config: Config<Props> = {
  components: {
    Text: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "Small Text",
      },
      render: ({ text }) => <Text>{text}</Text>,
    },
    Heading: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "Heading",
      },
      render: Heading,
    },
    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
      },
      defaultProps: {
        src: "https://picsum.photos/1600/900",
        alt: "Description of the image",
      },
      render: Image,
    },
  },
};

export default config;
