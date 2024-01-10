import { Image } from "@components/image";
import { Seperator } from "@components/seperator";
import { Heading, Text } from "@components/typography";
import type { Config } from "@measured/puck";

type Props = {
  Text: { text: string };
  Heading: { text: string };
  Image: { src: string; alt: string };
  Separator: null;
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
      render: ({ text }) => <Heading>{text}</Heading>,
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

    Separator: {
      render: Seperator,
    },
  },
};

export default config;
