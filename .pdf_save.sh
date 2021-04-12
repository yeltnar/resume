KEYBASE_LOCATION="/Volumes/Keybase"

export path="./pdf/resume.pdf" 
export url="file://$KEYBASE_LOCATION/public/droodle_b/resume/index.html" 

node print/index.js

cp -r pdf/* $KEYBASE_LOCATION/public/droodle_b/resume/
