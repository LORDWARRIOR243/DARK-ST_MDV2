
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50938240424";
global.owner = process.env.OWNER_NUMBER || "50935517367";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpac3Zxc2VhQ0o3NXBuVnlscGxpMmZtaERsRzI4N1FYMncwOGJ6dEJsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnFVZ3h2WU5TRHU0TlI5Mkl4RXh0YkFWUVFHUGFMd2xDQ01EcmljY1NBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSm9aUm1DaFZaQzlscmF5V3F0Z3JSNkppeW43UEdoV3p2Y21zeEEyeDFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQkxwWHg2alNya1JaR2lxK0cxRGgwM1ZDNXhkUGozMDJqVzYrOTF0RGs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGQTRnZHFxRW5aUUd4b01rMTdhaWVnM1owM2Uyall4MDVGNXlEV0QrV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitObktZeS9BajBkdnkrOGllb2gxUXFxZkdEOU9JWXlvSiszVUMwMkd3R0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NGNHNmbHo1cUFkNTdwR250cU56S3FNbG95aTFaOWc5UWxKZjNRU0tWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWZNMWRIVExmTGFMWGN0NVFKc1lBdVgrWDd1Y2ZnbEl0VDNCMUVzbDhsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFmY3RmQTM5Z1F2YW56bzE0S200c0prS29lZ3d6U0NWejV4Z1oxcVg5RVMwdFZRVEtSQ0Y5ME9TRWdYK3daSlVFSWxtL0JBLzE2b25JOU4rUWpPY2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJXajNTa2FmS1VrcDZHWk91Rng3K3RZay9EQThQNHdKNGowU1dmWkpnbkRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyVm4xOVBWeFQzZU00TGxiOHJjbTZRIiwicGhvbmVJZCI6IjI5NTFhY2RjLWQ2YWUtNDhjMi1hOTMyLTI1MGM5MmZjZjRkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqM1FSa1BvNzFKWmE2Z1BhTzJDVzdEVTY1MkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajBYbFV4TXBOVFNwczRqSVRwemt2ZExuWElJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwxWjNCRjFGIiwibWUiOnsiaWQiOiIyMzc2OTUyMzA0OTg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG18J2RrPCdkbPwnZGz8J2RsPCdkazwnZGzIPCdkIfwnZCO8J2QkvCdkIfwnZCI8J2QjfCdkI7imIbkuInwn5Sl8J+rtOKcqCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1RYdE1JRkVNcmtrN1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0FleHA4dE5sdlA0ZDNrWXM2WXlkVW0wQjdERVBVdjFRYWJyUmRQdDJFZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakNrNnQ3ZUxrbTY5cjB4K0xsQTVlTlg4d08zWm1ONldSdFAyY1BEWHFjRU13TS9FT1F0bXZMUUpnd01BeGtiUTVBb2FpcVdXUnM1S2NqZzJXKzNaREE9PSIsImRldmljZVNpZ25hdHVyZSI6InFxRFZnOXBlWUI2NkN6VkZlblQxdnZkdENCeTBVT2J6QTVJYTRNa3hzdGlKRHRVWnB6Yk1RejdEWm9IanZ2OU9MbUJ5NFhRZWlRZ3AzSGlUN1Z1R2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk1MjMwNDk4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmdIc2FmTFRaYnorSGQ1R0xPbU1uVkp0QWV3eEQxTDlVR202MFhUN2RoSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDE4MzEyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEelQifQ==//Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "〽️🅴🅻🅸🅾️🅳🅰️🆂 🤖",
  packname: process.env.PACK_NAME || "〽️🅴🅻🅸🅾️🅳🅰️🆂 🤖",
  botname: process.env.BOT_NAME ||   "〽️🅴🅻🅸🅾️🅳🅰️🆂 🤖",
  ownername: process.env.OWNER_NAME || "Wiz_Promomusicht",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
