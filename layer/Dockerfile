FROM public.ecr.aws/lambda/provided:latest

#
# version
#

ARG DENO_VERSION=v1.23.3
ARG DENO_TARGET=x86_64-unknown-linux-gnu

USER root
RUN mkdir -p /opt
WORKDIR /tmp

#
# build tools
#

RUN yum update -y \
    && yum install -y zip unzip wget

#
# deno
#

RUN mkdir -p /tmp/deno
RUN cd /tmp/deno && curl -LO https://github.com/denoland/deno/releases/download/${DENO_VERSION}/deno-${DENO_TARGET}.zip
RUN mkdir -p /opt/deno/bin && unzip -d /opt/deno/bin -o /tmp/deno/deno-${DENO_TARGET}.zip
RUN chmod +x /opt/deno/bin/deno

#
# deno-lambda
#

WORKDIR /opt/deno
ADD node_modules/deno-lambda/runtime/* ./

RUN mkdir -p .deno_dir/deps/https/deno.land/x/lambda/
RUN cp mod.ts .deno_dir/deps/https/deno.land/x/lambda/mod.ts
RUN cp types.d.ts .deno_dir/deps/https/deno.land/x/lambda/types.d.ts

RUN DENO_DIR=/opt/deno/.deno_dir /opt/deno/bin/deno run /opt/deno/mod.ts
RUN cp -R .deno_dir/gen/file/$(pwd)/. .deno_dir/LAMBDA_TASK_ROOT && ls -alh .deno_dir

#
# create the bundle
#

RUN cd /opt/deno \
    && zip --symlinks ../../layer.zip -x '.deno_dir/gen/file/*' -r .deno_dir ./bin/deno bootstrap \
    && echo "/layer.zip is ready" \
    && ls -alh /layer.zip;

WORKDIR /
ENTRYPOINT [ "/bin/bash" ]
