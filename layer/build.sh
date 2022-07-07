#!/bin/bash
set -x
set -euo pipefail

cd $(dirname $0)

echo ">> Building AWS Lambda layer inside a docker image for Deno..."

yarn install

TAG='aws-lambda-deno'
docker build --progress=plain -t ${TAG} .

echo ">> Extracting layer.zip from the build container..."
CONTAINER=$(docker run -d ${TAG} false)
docker cp ${CONTAINER}:/layer.zip ../src/layer.zip

echo ">> Stopping container..."
docker rm -f ${CONTAINER}
echo ">> src/layer.zip is ready"
