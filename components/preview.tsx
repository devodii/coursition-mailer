import {
  Preview as EmailPreview,
  PreviewProps as EmailPreviewProps,
} from "@react-email/components";

export function Preview(props: EmailPreviewProps) {
  return <EmailPreview>{props.children}</EmailPreview>;
}
