const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1021422952769650818/1202692245300576256/406471900_744314684178753_1197153636638370874_n.gif?ex=65ce6170&is=65bbec70&hm=15ba1d72f91450ed2e285ec4032986fe6828dee454a135abc227025a882c9bc5&",
                         ];
const smallpictureGede = [
"https://cdn.discordapp.com/attachments/1151373013749596243/1201067599719571518/8cbd7e449e8cbcd45368837ebab7ba5b.gif?ex=65c8785e&is=65b6035e&hm=496097e6d532610ee7ac6bf4d52a0297a2d9c9b83a8dc3f7e11c44a3a8ad9f05&",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['★☆★☆★☆★','☆★☆★☆★☆'];

const randomTexts = [
  ' Eri Đep Trai Vc',
  ' Eri Siêu Đep Trai',
  ' Eri Thiên Tài',
  ' Eri Ngầu Vãi Cứt',
  ' Eri Infinity',
  ' Eri Got the no bang cap',
  ' Eri Si Tình'

];

const randomtext3 = [];

const randomtext4 = [
  'FaceBook'
  

];

const randomtext5 = [];

const randomLinks = [
  "https://www.facebook.com/eriihung?mibextid=LQQJ4d",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();
  
  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = `〈 ${addZero(hours)}:${addZero(minutes)} 〉 • 〈 ${dates} / ${month} / ${year} 〉`


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`Hime`)
      .setURL('https://www.youtube.com/watch?v=qrFdCuOi5n8')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1176844012280352828")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${resultthree}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['token']);
