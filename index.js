const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1021422952769650818/1210640553927114802/c17dfb796dce3dffcb10c7f9172d0c48.gif?ex=65eb4be0&is=65d8d6e0&hm=10dde9e26f7fecddedbc80f932b7a6f8aa7a8ed9b4471207a2c90e51d417da5e&",
"https://cdn.discordapp.com/attachments/1021422952769650818/1210640554371588096/6720aac3d27437810aa0b1cccf5855da.gif?ex=65eb4be0&is=65d8d6e0&hm=91b16905511978a1f15bdb6a3dd9d0d61e8516d3779e71ff006dac70f7b3a158&",
"https://cdn.discordapp.com/attachments/1021422952769650818/1210640554811981855/7cb7fee465024f546d4eced9bb9c6645.gif?ex=65eb4be0&is=65d8d6e0&hm=83f18fd8156d537378ffc2dfb075c74602cbde983571a0559027f8491960f3b5&",
                         ];
const smallpictureGede = [
"https://cdn.discordapp.com/attachments/1021422952769650818/1210640617349189652/d9f6b7bed716e54bf9ee96f74da84c14.gif?ex=65eb4bef&is=65d8d6ef&hm=36a4b94c358a5c0a7054f4fab06cca863c9a7b12b5268357b368024c2f83609f&",
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

bot.login(process.env['TOKEN']);
