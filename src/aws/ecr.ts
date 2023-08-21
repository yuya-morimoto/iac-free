import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { getTagEnvIacFree } from "../utils";
import { RepositoryArgs } from "@pulumi/aws/ecrpublic";

type Props = {
  args?: Omit<RepositoryArgs, "repositoryName" | "tags">;
  opts?: pulumi.CustomResourceOptions;
};

/**
 * Create public ECR
 * ※ This resource can only be used in the "us-east-1" region. base region is "ap-northeast-1"
 */
export const createEcrPublic = (props: Props): aws.ecrpublic.Repository => {
  const stack = pulumi.getStack();
  return new aws.ecrpublic.Repository(
    `aws-ecr-punlic-${stack}`,
    {
      repositoryName: `zerohack-${stack}`,
      tags: { ...getTagEnvIacFree() },
      ...props.args,
    },
    {
      ...props.opts,
    }
  );
};
