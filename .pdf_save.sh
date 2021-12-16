export path="./pdf/AndrewBrantleyResume.pdf" 
export build_dir="file://$PWD/build/"
export url="$build_dir/index.html" 

# make back up of current build folder
mv build .build.bk

# build with fs aware routing
PUBLIC_URL="$build_dir" yarn run build &&

# use print to pdf node module 
node print/index.js
cp $path "./pdf/resume.pdf"

echo "saved to $path"

# replace build folder with previous content 
mv .build.bk build
