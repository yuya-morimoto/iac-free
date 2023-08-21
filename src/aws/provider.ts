import * as aws from "@pulumi/aws";

/**
 * Get us-east-1 provider
 */
export const getUsEastProvider = (): aws.Provider => {
  return new aws.Provider("aws-provider-us-east-1", {
    region: aws.USEast1Region,
  });
};
