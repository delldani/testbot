const puppeteer = require("puppeteer");
const _ = require("lodash");
var fs = require("fs");
const express = require("express");
const app = express();
const mysql = require("mysql");
const schedule = require("node-schedule");

// const job = schedule.scheduleJob("*/10 * * * * *", function () {
//   console.log("minden 10. másodperc");
// });

// const connection = mysql.createConnection({
//   host: 'eu-cdbr-west-01.cleardb.com',
//   user: 'b97cb50d2cb391',
//   password: 'fe636737',
//   database: 'heroku_f6b879ceb0d52a8'
// });
// connection.connect()

// connection.query('SELECT * FROM datas', function (err, rows, fields) {
//   if (err) throw err

//   console.log('első sor', rows[0])
// })

// connection.end()

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.listen(process.env.PORT || 3000);
// cookies = cookies.map((item) => {
//   if (item.name === "euconsent-v2") {
//     const newItem = {
//       ...item,
//       value:
//         "CPM707MPM707MAKAiAHUBsCsAP_AAH_AAA6gINtf_X__bX9j-_59f_t0eY1P9_r_v-Qzjhfdt-8F2L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2MryNKJ7LEmnMZO2dYGHtPn91TuZKY7_78__fz3z-v_t_-39T37-3_3__5_X---_e_V399zLv9____39nN___9v4INgEmGpeQBdmWODJtGlUKIEYVhIdAKACigGFomsAGBwU7KwCPUELABCagIwIgQYgowYBAAIJAEhEQEgBYIBEARAIAAQAqQEIACJgEFgBYGAQACgGhYgRQBCBIQZHBUcpgQFSLRQS2VgCUXexphCGW-BFAo_oqMBGs0QLAyEhYOY4AkBLxYAAAA.YAAAAAAAAAAA.1.QjY0v9UMqYSBhGAhdjRltA==",
//     };
//     return newItem;
//   } else {
//     return item;
//   }
// });

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    args: [
      // `--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36`,
      // `--proxy-server=51.81.82.175:80`,
      // `--proxy-server=191.96.42.80:8080`,
      // `--proxy-server=37.17.169.80:46768`,
      // `--proxy-server=89.133.246.90:5678`,
    ],
  });

  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    // accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    // "accept-encoding": "gzip, deflate, br",
    // "accept-language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7",
    // cookie:
    //   "IDE=AHWqTUn3IjgF-_0raSrlpFAv9nru_xnaZRa4yqbTshtjwyOGWScaODxg04BgsS7R; DSID=AAO-7r650cJfbsNfjjUWoXqjJvwTbnzAUnVoCsjPehY2biKGco4KfgaSXpe6J6SY-IUi-ifm-6qOcIx7hfoevcFf9pL8Ys_OxGQNa5jmnqUoFjSHpLcsfGA",
    // referer: "https://googleads.g.doubleclick.net/",
    // "sec-ch-ua":
    //   '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    // "sec-ch-ua-mobile": "?0",
    // "sec-ch-ua-platform": "Windows",
    // "sec-fetch-dest": "image",
    // "sec-fetch-mode": "no-cors",
    // "sec-fetch-site": "same-origin",
    // "x-client-data":
    //   "CJC2yQEIpLbJAQjBtskBCKmdygEI7/LLAQie+csBCOqDzAEIzYTMAQjdhMwBCOeEzAEI+YTMARiOnssB",
  });
  await page.setViewport({
    width: 1920,
    height: 800,
  });
  // await page.evaluateOnNewDocument(() => {
  //   Object.defineProperty(navigator, "platform", { get: () => "Win 32" });
  //   Object.defineProperty(navigator, "productSub", { get: () => "20030107" });
  //   Object.defineProperty(navigator, "vendor", { get: () => "Google Inc." });
  //   Object.defineProperty(navigator, "oscpu", { get: () => "undefined" });
  //   Object.defineProperty(navigator, "cpuClass", { get: () => "undefined" });
  // });
  // const HASH =
  //   "CPNLw1bPNLw1bAKAiAHUBtCsAP_AAH_AAA6gIOtf_X__bX9j-_59f_t0eY1P9_r_v-Qzjhfdt-8F2L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2MryNKJ7LEmnMZO2dYGHtPn91TuZKY7_78__fz3z-v_t_-39T37-3_3__5_X---_e_V399zLv9____39nN___9v-CDYBJhqXkAXZljgybRpVCiBGFYSHQCgAooBhaJrABgcFOysAj1BCwAQmoCMCIEGIKMGAQACCQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBUi0UEtlYAlF3saYQhlvgRQKP6KjARrNECwMhIWDmOAJAS8WAAAA.YAAAAAAAAAAA";

  // enable console.log
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  // Set the cookies

  await page.goto("https://www.argep.hu");

  // await page.setCookie({
  //   name: "euconsent-v2",
  //   value: HASH,
  //   domain: ".telex.hu",
  //   path: "/",
  //   expires: 1635348294000,
  //   size: 421,
  //   httpOnly: false,
  //   secure: false,
  //   session: false,
  //   sameSite: "Lax",
  //   priority: "Medium",
  //   sameParty: false,
  //   sourceScheme: "Secure",
  //   sourcePort: 443,
  // });
  // await page.evaluate(() => {
  //   const HASH =
  //     "CPNLw1bPNLw1bAKAiAHUBtCsAP_AAH_AAA6gIOtf_X__bX9j-_59f_t0eY1P9_r_v-Qzjhfdt-8F2L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2MryNKJ7LEmnMZO2dYGHtPn91TuZKY7_78__fz3z-v_t_-39T37-3_3__5_X---_e_V399zLv9____39nN___9v-CDYBJhqXkAXZljgybRpVCiBGFYSHQCgAooBhaJrABgcFOysAj1BCwAQmoCMCIEGIKMGAQACCQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBUi0UEtlYAlF3saYQhlvgRQKP6KjARrNECwMhIWDmOAJAS8WAAAA.YAAAAAAAAAAA";

  //   localStorage.setItem("_cmpRepromptHash", HASH);
  // });

  // await page.goto("https://telex.hu");

  // go to the page

  // await page.click("[aria-label=ELFOGADOM]");

  // const newCookies = await page._client.send("Network.getAllCookies");
  // const newCookies = await page.cookies();

  // const localStorageData = await page.evaluate(() => {
  //   let json = {};
  //   console.log(localStorage);
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     json[key] = localStorage.getItem(key);
  //   }
  //   return json;
  // });

  // fs.writeFileSync(
  //   "cookiesJsonfile.json",
  //   JSON.stringify(newCookies, null, 2),
  //   "utf-8"
  // );

  // fs.writeFileSync(
  //   "localStorigeJsonfile.json",
  //   JSON.stringify(localStorageData, null, 2),
  //   "utf-8"
  // );

  // await page.screenshot({ path: "screenshot.png" });

  // await browser.close();
})();
