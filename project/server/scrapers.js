const puppeteer = require('puppeteer');

async function scrapeChannel(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".a-size-medium.a-color-base.a-text-normal")).map(x=>x.textContent);
    });

    const price = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".a-offscreen")).map(x=>x.textContent);
    });

    const score = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".a-icon-alt")).map(x=>x.textContent);
    });

 
    const weburl = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'), a => a.getAttribute('href'));
    });

    browser.close();

    for(let i = 0; i < 6; i++){
        // console.log(title[i], price[i], score[i])
        // if(title[i] != NULL || price[i] != NULL || score[i] != NULL || weburl != NULL){
        console.log('Title: ' , title[i]);
        console.log('Price: ' , price[i]);
        console.log('Score: ' , score[i]);
        console.log('URL: ' , weburl[i]);
        console.log(' ');
    // }
    }


    return {title, price, score, weburl}
    
}

// scrapeChannel('https://www.amazon.com/s?k=alexa+echo&sprefix=alexa%2Caps%2C168&ref=nb_sb_ss_pltr-ranker-lnopsacceptance_4_5')
module.exports = {
    scrapeChannel
}