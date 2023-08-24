import * as pulumi from "@pulumi/pulumi";
import { config } from "../constants";

/**
 * Get env tag
 * @returns Format(iac-free-{stackName})
 */
export const getTagEnvIacFree = () => {
  const tagPrefix = new pulumi.Config(config.project.iacFree).require(
    config.key.tagPrefix
  );
  const stack = pulumi.getStack();

  return {
    env: `${tagPrefix}-${stack}`,
  };
};
