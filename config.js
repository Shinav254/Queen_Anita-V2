//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "254114537515";
global.owner = process.env.OWNER_NUMBER || "254114537515";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEh0STI5dGgvUDFTZHBNQ1FHdFBHdUxJMFNhMmZ4WHJ6RjRJQXVyRFpYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTJhQit2V0xzZ1I4R2I5RkhKaU03bm9abzl5Wkc2R3oyRml1aFg2V0hXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQTcxSGRXbWJ4SXB0aENvOEVkK3pLVHBpdFJOZms1dkhtMzl3Ky9wekdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZlJEck9jLzBsdW1GbVBuOXFmVHk2MEs5NmZvMkN3NUkwOWlpY3RlOTAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEZlFEdHQ4ei9RNXBlekQvalEzdmhBbEJ2Ry9xS2VPL1RQM2VFS2VNMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4vYzVqR0dyc1lhUHMwOVJtZnVaWGUrdjBmcWRpaFdXMkhEQ1UrWnFSa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS013OGE3VlVpSnQvYU9pMXZmZzFvVGxaemJNbVZOMmFlUDhaTHhHa09GUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjhqMmpWd01oZ3FLOXRlN0Q1Zi94M0JUL0RvdTZaSk40dEtOOC85bTdIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR1VjE2T2ZDbUVUb0FBOW5DeVJxZXpwdkRxb1MwbUNxdDJwQm1JRnAwZXFXRDlpYUtmQ3V5ZlB1cUNMQml6TlExMFUzUHd1MFZoWmxqUVZ6dW04SGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiI2VUpmcFNZUG9UYktJYW54MitRVlNRSlBua2NVSlFiUkxEbE5Ccnh3MlMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaZEsxSFhvdlN6NnVPdjdWMmxUTkF3IiwicGhvbmVJZCI6IjAyYzlmNWVjLTJkNmUtNGM2OC05ZDI0LWZiYzc3MGY1ZGM0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5WGVXRlFLMnlLNEhZeXF4c0JydUdOeXoxQjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzFGdldYS3pEdU9TOVdDQ0FHejcvcHl2eW1nPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhGVzE5RU03IiwibWUiOnsiaWQiOiIyNTQxMTQ1Mzc1MTU6NjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUcDcxQVFzS0sxdFFZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtvdVZPakg0dzdwM2ZSWFVlalJIMlRuVlRDWFRZcUxobVR0QXUzaldGVG89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImROSStyYlVzeUoyN1Nrak9Mc2s0S3BhZU5ITGpjOWU2K250Rm5hQ1VCV0VCSkNHeE0vWDV3QzRZdHdKTWRuYjhZb1VhQWE0NVZJWGdPUDFraTE2WURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXV3NQZ0FCOUJZYWR0aCtib1pXTS9LbEpORm9BMGQzcVM1WCs3RDB6b3JYT1dhNUdwSTJxMGs4S1pyWXlTVHBSWmFjemJCb3VsWEh2M3dxbi80YUhnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExNDUzNzUxNTo2NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaS0xsVG94K01PNmQzMFYxSG8wUjlrNTFVd2wwMktpNFprN1FMdDQxaFU2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjM0NTU3fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "¶",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`VANISH_TECH-V2™`",
  author: process.env.PACK_AUTHER || "VANISH-V2",
  packname: process.env.PACK_NAME || "VANISH",
  botname: process.env.BOT_NAME || "JOJO_LOLA",
  ownername: process.env.OWNER_NAME || "Vanish Tech",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
