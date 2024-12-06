//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "8295434323";
global.owner = process.env.OWNER_NUMBER || "8295434323";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ovcm5BbWlYM3YzaC8yZld1dldQL095c0VtTUhWSmVHNi9IOFdIdzQyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2VxZDdJOTFCL2wyeTd3SlJyZzlwai9rdzgyaVErblhKOWhOZWNyVGxTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSUppbW1hWTBKdHZreWNYcVFVeHZ3bkZDVTYyb3lpRk1ETWFZM3BwWmxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4N0MwbXVmbW14SEc4QTZBWFBCTVVMTmd5eElhNVV0c0wzR3dXZlI1MFgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLZzVNcWJDSlpvUGZSb0xYc2lTeThpdVZoa2tWNzREN2NVZUVGVFkvRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxSkN5SVRja0xWak9kKzk4eFRFdTM5WXZ5N0lTd0hGMXI2cWp4NVY3RWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0d5enBiSEhJY3dtc3ZZbjRxOCtrdXY5STRrcXV4MzNkTk9KanNLMVFsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTncydTZTU0lKZ0ZWMmRlVXNnd0wyQzVRSGI0cE4rbkVxTWlWZjIrVHJSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRlaGZxUU1mK2tjOGdmTkxheW9TNVJTcnh2dUZRVmhPTkx6YUVsb21qcUpRWmFDM0p6V2IvNUtZdjJyeDFiZUo5L2lRZ3VleXNaUGQ1MDBOdER0U0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiI4eXdUL3lGOHNVWmdZV3AyL2thRzhLdlpNbEZLRVZDdXFDY0tvK0NLTmdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQRUkxVE1yZlF2YWhSUU9yMk1kVnlBIiwicGhvbmVJZCI6IjYwZjFlZmJmLTBmNjgtNDVhOC04ODQ2LTYzNTkzM2RjOTE5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWGhsbFN6NUNLWC9tMkM3MlM3TjhGSmFWa009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHpnS1V4V0ZvRFdrZW90QTdtNjlOd3JIYzVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE2V0daTkJIIiwibWUiOnsiaWQiOiIxODI5NTQzNDMyMzo0OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHoxbmFnREVOS0J5Ym9HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0c1M0hRQlFxdnZqcGZiNTJiMm13UTdEaTlZV0VyZFdEREJPNHU4d1VWYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVkdER0IvdnVYLzFkdjVVdEhXQWE4V0pjN0lPdG1HNmJsTjZvZDdYR1RSdW9YKzVjaEZ4b2tyUGZnM0d1UEYvTU92MERDdDd3cVdCejNPa2E3Q3NVRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik56aU9NaFJBUUhwZ1N2SzJ2aWFCNitWWTNaNnlKREZ4NGNEQThNQTFtZVJ5Vk4zMGNNNWo5eEs0SXBTYWFycjV1ekFlMUtvMnVScEgybXJiaUFuSEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTU0MzQzMjM6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkJ1ZHgwQVVLcjc0NlgyK2RtOXBzRU93NHZXRmhLM1Znd3dUdUx2TUZGWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzQ0MzgwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHeGMifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𝐺𝛩𝐷𝄟✮͢≛⃝𝐶𝑅𝛥𝑆𝑆𝑈𝑆𝄟✮⃝❄️𖡨",
  botname: process.env.BOT_NAME || "𓄂⍣⃝𝐺𝛩𝐷𝄟✮͢≛⃝𝐶𝑅𝛥𝑆𝑆𝑈𝑆𝄟✮⃝❄️𖡨",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝐺𝛩𝐷𝄟✮͢≛⃝𝐶𝑅𝛥𝑆𝑆𝑈𝑆𝄟✮⃝❄️𖡨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
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
