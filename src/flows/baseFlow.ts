import { getUsEastProvider } from "../aws";

export const baseFlow = () => {
  const usEastProvider = getUsEastProvider();
  return { usEastProvider };
};
