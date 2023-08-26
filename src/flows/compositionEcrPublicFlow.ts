import { Provider } from "@pulumi/aws/provider";
import { createEcrPublicSvgParser } from "../aws";

type Props = {
  usEastProvider: Provider;
};

export const compositionEcrPublicFlow = (props: Props) => {
  createEcrPublicSvgParser({
    opts: { dependsOn: [props.usEastProvider], provider: props.usEastProvider },
  });
};
