const fs = require("fs");

const {main_json_location, out_json_location} = (()=>{
    // const main_json_location = "../src/data/main.json";
    // const out_json_location = "../src/data/julie.json";


    const main_json_location = process.argv[2];
    const out_json_location = process.argv[3];

    if( main_json_location===undefined ){
        throw new Error("main_json_location process.argv[2] is undefined");
    }
    if( out_json_location===undefined ){
        throw new Error("out_json_location process.argv[3] is undefined");
    }

    return {main_json_location, out_json_location};
})();


// const main_json = require("../"+main_json_location);
const main_json = JSON.parse(fs.readFileSync(main_json_location));

(()=>{

    main_json.resume.forEach((cur)=>{
        if( cur.title==="Achievements" ){
            // scored a smart, beautiful, hilarious, and all around amazing girlfriend
            cur.content.unshift({
                "type": "achievement-date",
                "data": [
                    "Scored a smart, beautiful, hilarious, and all around amazing girlfriend"
                ],
                "date": "October 7, 2017"
            });
        }
    });

})();

if( typeof main_json !== "object"  ){
    throw new Error("main_json is not an object");
}

fs.writeFileSync(out_json_location, JSON.stringify(main_json,null,2));

