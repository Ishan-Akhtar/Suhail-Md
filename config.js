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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_56_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9oVnR2Z1BYQVhnNjZQQm1JMzNJamVHNkdMZDZ3TUdzNStleDZXSTdoUUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRlNjZrdDdzU29XSUdoX2xHazl0N0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjJmNDdjNDctMmE3MC00OWU0LThlYzMtMmVkNTJlYzkyNDVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDc1LFxuICAgICAgMjQwLFxuICAgICAgMyxcbiAgICAgIDIwMixcbiAgICAgIDE0OSxcbiAgICAgIDE3NixcbiAgICAgIDY5LFxuICAgICAgMTcwLFxuICAgICAgMjEzLFxuICAgICAgMTMwLFxuICAgICAgMjMsXG4gICAgICAxMTUsXG4gICAgICAxMDcsXG4gICAgICAxNTMsXG4gICAgICA4NyxcbiAgICAgIDIwNyxcbiAgICAgIDE1OCxcbiAgICAgIDI1MixcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgODQsXG4gICAgICAxMjksXG4gICAgICAxNDYsXG4gICAgICAyNDcsXG4gICAgICA3MixcbiAgICAgIDE1NCxcbiAgICAgIDU1LFxuICAgICAgODIsXG4gICAgICAxOTYsXG4gICAgICA2NixcbiAgICAgIDEzNyxcbiAgICAgIDYwLFxuICAgICAgNjUsXG4gICAgICAwLFxuICAgICAgMTM5LFxuICAgICAgMTU1LFxuICAgICAgMTk0LFxuICAgICAgMjI5LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEY1RkRQQ05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTcxMTc1ODc2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQwMTk2NDI5NzQzNTY6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVEVDSCBMT1JEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXkrb1BjR0VMT2lzclVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPaGIvTk0zYzJLRjBpbW5tZHkycnRnS0pxdklXMWpIam5aSWJSSENCemxRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFzTXE4ckthWVlkU2xvTEJWSmxNVnN1T3pTd3VuWVB2dlcvbTBWTVZIU1VqWkR6MFJuc2sxRGMwdTcvS04zcmdFTkFkdXNPcHN5ZUNKdFNYbHJCZ0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFrd2pLaHRTQWtDMjF0bktuWndmOExSaGxrRjZwM1RuM200NWMzMnFFUXh0MDRzakREMVAxVlZ3NU00R1ZLVzBidEEvTm1iVmEvVTZXbWYydHB4RUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTcxMTc1ODc2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU4NTM5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNuRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ25GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGZLQUljalpwblo0Tk9iUm10Qm04VnJlWks2K0xOSnc5aWRIbHg0Q3lHYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODYwNzA2MTIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc4NDE0ODk2ODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
