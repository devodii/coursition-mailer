import { Heading, Text } from "@components/typography";
import { Seperator } from "@components/seperator";
import { Root } from "@components/html";

const mapTypeToComponent = (type: string, props: any) => {
  console.log("mapping..");
  switch (type) {
    case "Text":
      return <Text {...props}>{props.text}</Text>;
    case "Heading":
      return <Heading {...props}>{props.text}</Heading>;
    case "Separator":
      return <Seperator {...props} />;
    // Add more cases for different types
    default:
      return null;
  }
};

export function convertToReactEmail(content) {
  const emailComponents = content?.map((item, index) => {
    const { type, props } = item;
    const Component = mapTypeToComponent(type, props);
    return <Root key={index}>{Component}</Root>;
  });

  return emailComponents;
}
