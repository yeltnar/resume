const puppeteer = require('puppeteer');

let {
    path,
    url,
    printBackground,
    displayHeaderFooter

} = process.env;

(async () => {

    if( path===undefined ){
        console.error("path cli param is undefined");
        process.exit();
    }
    if( url===undefined ){
        console.error("url cli param is undefined");
        process.exit();
    }

    printBackground = printBackground===undefined ? true : printBackground;
    displayHeaderFooter = displayHeaderFooter===undefined ? false : displayHeaderFooter;

    console.log({
        path:`../path/${path}`,
        url,
        printBackground,
        displayHeaderFooter
    });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto(url);

    const print_options = {
        path,
        printBackground,
        displayHeaderFooter
    };

    await page.pdf(print_options);

    await browser.close();
})();