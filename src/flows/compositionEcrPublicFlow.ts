import { Provider } from "@pulumi/aws/provider";
import { createEcrPublic } from "../aws";

type Props = {
  usEastProvider: Provider;
};

export const compositionEcrPublicFlow = (props: Props) => {
  createEcrPublic({
    opts: { dependsOn: [props.usEastProvider], provider: props.usEastProvider },
  });
};
