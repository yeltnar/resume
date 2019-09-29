

saveToKeybaseFolder(){
    cp src/data/main.json src/data/.bk.json
    cp src/data/$2 src/data/main.json

    export PUBLIC_URL="https://droodle_b.keybase.pub/"$1
    echo $PUBLIC_URL

    yarn run build &&
    cp -r build/* /keybase/public/droodle_b/$1/ &&
    echo {\"time\":\"$(date)\"} > /keybase/public/droodle_b/$1/time.json

    mv src/data/.bk.json src/data/main.json
}

# saveToKeybaseFolder resume main.json
saveToKeybaseFolder resume2 julie.json