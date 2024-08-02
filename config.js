const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919395088931";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_48_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRhd0M5bHE0ME5RVWY0ZU1sMjdUa3Rqek93V1oxdlBhM05BZm1IU2phM3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndtUkk5R1E0U3lPLW9OZHZ4VldmMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTY4N2Q4MmEtMmEwYy00NjUwLThlNTktYTE3MmRlZDUxYmExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTUwLFxuICAgICAgMjE1LFxuICAgICAgMTU5LFxuICAgICAgMixcbiAgICAgIDU4LFxuICAgICAgMTE0LFxuICAgICAgMzMsXG4gICAgICAxMjgsXG4gICAgICA5MCxcbiAgICAgIDczLFxuICAgICAgMTg1LFxuICAgICAgMjE0LFxuICAgICAgMTA2LFxuICAgICAgMTAxLFxuICAgICAgMjUzLFxuICAgICAgMjU1LFxuICAgICAgNDAsXG4gICAgICAxNyxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAyMzgsXG4gICAgICAxNDcsXG4gICAgICAxNzAsXG4gICAgICAxNSxcbiAgICAgIDIwOCxcbiAgICAgIDEzMyxcbiAgICAgIDE4OSxcbiAgICAgIDIwMixcbiAgICAgIDMsXG4gICAgICAzOCxcbiAgICAgIDMyLFxuICAgICAgMTEwLFxuICAgICAgMTA5LFxuICAgICAgMjI4LFxuICAgICAgMjMyLFxuICAgICAgMTQzLFxuICAgICAgNDEsXG4gICAgICAyNTAsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKR1NMSDVOS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NjYxMzMyNDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn7Dp8OjbGwgbWjDrSDDuGzDo35cIixcbiAgICBcImxpZFwiOiBcIjg0NTEyNTQxMjQ1NDU3OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kydnlUOFE4c3l2dFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSm1mSFlmeVI5TmtzNmc3enNOR0VHWUNHYlNBRUVqRzIxN3hZcE40MWNCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVTWNUS2JRNGJiL0ZlcnBidXQrNWxtaFd0ckJZU1Z5QnluTXMySDg4N3I1WnJORmRjZzJhdmkralpMQnFuVEkvVnVyMzlmd1hqZjJ4cnNkL1hwRmREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuVEJRa2l5OVpqV0ZuT3RqMFhzUnJRekVRcTA0dWhUKzl2aXB6b1JmRlFBVU9jVmRYMkUzMGREMDJMV0FCRFUvZ1djTEdkU28ySnFpck54UXVhWVJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2NjEzMzI0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NDE2ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『JOIN OUR WHATSAPP GROUP』*\n https://chat.whatsapp.com/IvUOFiJu7aL5UEAbPIzLj8),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ISHAN AKHTAR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
