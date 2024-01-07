import { Img as EmailImage, ImgProps } from "@react-email/components";

export function Image(props: ImgProps) {
  return <EmailImage {...props} className="border min-h-32 w-full" />;
}
