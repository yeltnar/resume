#!/usr/bin/env bash
set -e

# THIS REQUIRES THE BUILD TO HAVE ALREADY HAPPEN

export path="./pdf/AndrewBrantleyResume.pdf" 
export build_dir="file://$PWD/dist/"
export url="http://localhost:9999" 

# make back up of current build folder
# rm -rf .dist.bk
# mv dist .dist.bk

# build with fs aware routing
# PUBLIC_URL="$build_dir" npm run build &&
npm run build &&

podman rm -f pdf_builder
trap 'podman rm -f pdf_builder' EXIT
podman run --name pdf_builder -p 9999:9999 -v .:/host -d node:latest npx serve /host/dist -p 9999 --no-port-switching
# start_pid="$!"
# echo "$start_pid"
ready=false
for i in {1..120}; do
    if curl -fsS "$url" >/dev/null 2>&1; then
        ready=true
        break
    fi
    sleep 1
done
if [ "$ready" != true ]; then
    podman logs pdf_builder
    echo "HTTP server failed to become ready" >&2
    exit 1
fi
mkdir -p pdf

# use print to pdf node module 
node print/index.js
cp $path "./pdf/resume.pdf"

echo "saved to $path"

# replace build folder with previous content 
# mv .dist.bk dist
