const puppeteer = require("puppeteer");
const _ = require("lodash");
var fs = require("fs");
const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'bc23ff3f76d0a9',
  password: '5092a89f',
  database: 'heroku_8cbe72208086067'
});
connection.connect()

connection.query('SELECT * FROM datas', function (err, rows, fields) {
  if (err) throw err

  console.log('első sor', rows[0])
})

connection.end()

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set("view engine", "ejs");

// const userRouter = require("./routes/users");

// app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000);
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

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({
//     width: 1920,
//     height: 800,
//   });

//   const HASH =
//     "CPM-grAPM-grAAKAiAHUBsCsAP_AAH_AAA6gINtf_X__bX9j-_59f_t0eY1P9_r_v-Qzjhfdt-8F2L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2MryNKJ7LEmnMZO2dYGHtPn91TuZKY7_78__fz3z-v_t_-39T37-3_3__5_X---_e_V399zLv9____39nN___9v4INgEmGpeQBdmWODJtGlUKIEYVhIdAKACigGFomsAGBwU7KwCPUELABCagIwIgQYgowYBAAIJAEhEQEgBYIBEARAIAAQAqQEIACJgEFgBYGAQACgGhYgRQBCBIQZHBUcpgQFSLRQS2VgCUXexphCGW-BFAo_oqMBGs0QLAyEhYOY4AkBLxYAAAA.YAAAAAAAAAAA";
// enable console.log
// page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

// Set the cookies
// console.log(cookies);
//

// await page.goto("https://telex.hu");

// await page.setCookie({
//   name: "euconsent-v2",
//   value: HASH,
//   domain: ".telex.hu",
//   path: "/",
//   expires: 1666011745.725478,
//   size: 421,
//   httpOnly: false,
//   secure: true,
//   session: false,
//   sameSite: "Lax",
//   priority: "Medium",
//   sameParty: false,
//   sourceScheme: "Secure",
//   sourcePort: 443,
// });
// await page.evaluate(() => {
//   const HASH =
//     "CPM-grAPM-grAAKAiAHUBsCsAP_AAH_AAA6gINtf_X__bX9j-_59f_t0eY1P9_r_v-Qzjhfdt-8F2L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2MryNKJ7LEmnMZO2dYGHtPn91TuZKY7_78__fz3z-v_t_-39T37-3_3__5_X---_e_V399zLv9____39nN___9v4INgEmGpeQBdmWODJtGlUKIEYVhIdAKACigGFomsAGBwU7KwCPUELABCagIwIgQYgowYBAAIJAEhEQEgBYIBEARAIAAQAqQEIACJgEFgBYGAQACgGhYgRQBCBIQZHBUcpgQFSLRQS2VgCUXexphCGW-BFAo_oqMBGs0QLAyEhYOY4AkBLxYAAAA.YAAAAAAAAAAA";

//   localStorage.setItem("_cmpRepromptHash", HASH);
// });

// await page.goto("https://telex.hu");

//go to the page

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
// })();

// mysql://
// bc23ff3f76d0a9
// :
// 5092a89f
// @
// eu-cdbr-west-01.cleardb.com
// /heroku_8cbe72208086067?reconnect=true
