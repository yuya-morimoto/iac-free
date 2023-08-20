FROM ubuntu:22.04

# Pulumi install version
ARG PULUMI_VERSION

RUN apt-get -y update && \
    apt-get -y install curl && \
    apt-get clean

RUN curl -fsSL https://get.pulumi.com | sh -s -- --version ${PULUMI_VERSION}

# Move root to usr and path
RUN mkdir /usr/bin/.pulumi && mv /root/.pulumi/* /usr/bin/.pulumi/
ENV PATH "$PATH:/usr/bin/.pulumi/bin/"

ENTRYPOINT ["/bin/bash"]