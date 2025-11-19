export path="./pdf/AndrewBrantleyResume.pdf" 
export build_dir="file://$PWD/dist/"
export url="http://localhost:9999" 

# make back up of current build folder
rm -rf .dist.bk
mv dist .dist.bk

# build with fs aware routing
PUBLIC_URL="$build_dir" npm run build &&

podman rm -f pdf_builder; podman run --name pdf_builder -p 9999:9999 -v .:/host -d node:latest npx serve /host/dist -p 9999 --no-port-switching
# start_pid="$!"
# echo "$start_pid"
sleep 5 # sleep so server can start

# use print to pdf node module 
node print/index.js
cp $path "./pdf/resume.pdf"

podman rm -f pdf_builder

echo "saved to $path"

# replace build folder with previous content 
mv .dist.bk dist
