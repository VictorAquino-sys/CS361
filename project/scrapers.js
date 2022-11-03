const puppeteer = require('puppeteer');
const db = require('./db');

async function scrapeChannel(url) {
    // var receiveurl = Object.values(url);
    var receiveurl = JSON.stringify(url);   
    console.log('test: ' + receiveurl);
    var channelURL = receiveurl.replace(/ /g, '+');
    var userURL = `https://www.amazon.com/s?k=${channelURL}&sprefix=samsubng%2Caps%2C166&ref=nb_sb_ss_pltr-ranker-lnopsacceptance_1_8`

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(userURL);

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

    // for(let i = 0; i < 6; i++){
    //     console.log('Title: ' , title[i]);
    //     console.log('Price: ' , price[i]);
    //     console.log('Score: ' , score[i]);
    //     console.log('URL: ' , weburl[i]);
    //     console.log(' ');
    // }

    for(let i = 0; i < 5; i++){

        const insertCompanyList = "INSERT INTO `product` ( `title`, `price`, `score`, `url` ) VALUES (?,?,?,?)";

        const insertsql = db.con.query(insertCompanyList, [title[i], price[i], score[i], weburl[i]], function(err, rows) {
            if (err) {
              console.log(err);
            } else {
              console.log('DB insert successful. Record: ' +  i);
            }
        });
        //   console.log(insertsql);
    }
    // return {title, price, score, weburl}
}

// scrapeChannel('https://www.amazon.com/s?k=alexa+echo&sprefix=alexa%2Caps%2C168&ref=nb_sb_ss_pltr-ranker-lnopsacceptance_4_5')

module.exports = {
    scrapeChannel
}