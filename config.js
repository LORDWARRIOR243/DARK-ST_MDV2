
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


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hQelUwQnZqdFBpWXNudm5SaXRXSWVCRE96U3RrSlFDSmNobTYxcXIxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3BLNTRDSUlyRHk2V3dnaXAxOUtaL21vMmlEdmlxMG1xb0lOM1htaE15VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR1hwb0JHWGdoYVRRc2hvT0JHTmpFaGkzZ1JDbEdLb3BCbG5tMS9aeDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQU5vcHJkS3NacU5vckwwWmZaMHhpUUhNOVZIaEtXS1BsakNhNU5jdG40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEOEhwTW1DQnNDYXZNREoxM2JwaXlmdlBLWlRSRHExdTVqeUNxQ1dKVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBcHhXcGxKTEdGTVh5VFp3a3pSMzZwNWRkdkdCeThhb3RKNFFxdU84QTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBOTllRWEVSTjdjSDBGL2o0WkxKUmx6cHlvSWhVMHZQWllnWUVqUzJsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9Lak1xekxKN3ZHNklhMmR5VnFlZmVIM3JBelZmenhRVTBTRXNNZDJVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwN05SVGNmUWZuZG1CUWFJaXNZNHlrdlJwR1pUbVNtQUtXWWJhRTE2QXkxZytqLzB4S0ZzUFV1RC9oWE5oaDdkVVUrbFVwRmRaeEdJeGk3SUtId0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiMFphMmdheU9qZWJvc1RrQVc4UlRyUDBMWVRoMlhPRVkxazJYVklRSjZwcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI1MDkzNTUxNzM2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUU1RTE4MjkzNjQzQjYxODU2OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDc3NTI4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPOXVKcW9PSVQ3T2w2RjFwbVBRQzJnIiwicGhvbmVJZCI6ImQ4Njg5YmE2LWViZGYtNDg2My04YTMyLTI3ZmY4MTE4MzM4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5UlZZMjZVUHp0aEFQYUhwS2tiVnF4YVk3WUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzhhSnVTQkFseTNjV1Y3d3NoM1VNN1Z0NHZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxSkVQVjVKIiwibWUiOnsiaWQiOiI1MDkzNTUxNzM2Nzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOAve+4j/CfhbTwn4W78J+FuPCfhb7vuI/wn4Wz8J+FsO+4j/CfhoIg8J+kliJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3IrOVBFTkVNYXJqYllHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUE1HOVd3TWNjM2hLSzA3dHQzaHhXaEF5R0lCR3cydmRwR2NlbTE4aEZTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkY1anB6UDVtbUpLSzRZL1hESWt5c2N4ZEtLUWpmQ3hwOEJHSmRodlFJZnhRWEpnbXM4N0F5aHZMRm5GTWJnaTVuV1J3YWlRaXR1SkNnZlZaeExuaVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImtrNGdyTU50b1JuVkhLRWVSMnZLOW03MU41S1hoNHJEdGlmcHhQNFNqMjg4dm9sci9CSmFtckt3cXRxVjA2REU2ZGRVNStlWEhLc0F6STZvZzBvVERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzU1MTczNjc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUekJ2VnNESEhONFNpdE83YmQ0Y1ZvUU1oaUFSc05yM2FSbkhwdGZJUlVqIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwNzc1MjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEJ3In0=" //Make sure session id starts with Byte;;;



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
