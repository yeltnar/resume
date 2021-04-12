KEYBASE_LOCATION="/Volumes/Keybase"

saveToKeybaseFolder(){
    cp src/data/main.json src/data/.bk.json
    cp src/data/$2 src/data/main.json

    export PUBLIC_URL="https://droodle_b.keybase.pub/"$1
    echo $PUBLIC_URL

    # rm -rf /Volumes/Keybase/public/droodle_b/$1/*

    PUBLIC_URL="https://droodle_b.keybase.pub/"$1 yarn run build &&
    cp -r build/* $KEYBASE_LOCATION/public/droodle_b/$1/ &&
    echo {\"time\":\"$(date)\"} > $KEYBASE_LOCATION/public/droodle_b/$1/time.json

    mv src/data/.bk.json src/data/main.json
}

saveToKeybaseFolder resume main.json

# make julie json file and make version with it
node dynamic_resume_change/julie.js src/data/main.json src/data/julie.json
saveToKeybaseFolder resume2 julie.json