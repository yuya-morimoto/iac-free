import { createEcrPublic, getUsEastProvider } from "../aws";

export const compositionEcrPublicFlow = () => {
  const usEastProvider = getUsEastProvider();
  createEcrPublic({
    opts: { dependsOn: [usEastProvider], provider: usEastProvider },
  });
};
