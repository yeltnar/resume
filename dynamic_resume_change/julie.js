const fs = require("fs");

const main_json = require("../src/data/main.json");

(()=>{

    main_json.resume.forEach((cur)=>{
        if( cur.title==="Achievements" ){
            console.log(cur);
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

// console.log(main_json);

fs.writeFileSync("../src/data/julie.json", JSON.stringify(main_json,null,2));

