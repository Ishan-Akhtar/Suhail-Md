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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_39_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicjQwcmlVYVpZeWJFaVRYN3pVZmFKd2ExQVpoWHU4OWt5SVZwb2I1K21oZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzOTUwODg5MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5RTZBREYzMTY4M0EwNDM5N0UxRTI1REQ4RUEzQzE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQxNTE5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM5NTA4ODkzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEVENzMzQTdGODkwQTRGRjM2MkRBOEU2MTI4Njc1RTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDE1MTk4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNSNU10MTZvVGQyZ2Z4dHNJV3ZRRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDZmNmNjNzYtZmYxZC00YzBlLWFhZDUtODFkNTQyN2UxYjk0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDQ3LFxuICAgICAgNDUsXG4gICAgICAyMzEsXG4gICAgICAyNDksXG4gICAgICAzLFxuICAgICAgOTAsXG4gICAgICAxNjUsXG4gICAgICAyMzUsXG4gICAgICA4MCxcbiAgICAgIDE0OCxcbiAgICAgIDc3LFxuICAgICAgMTczLFxuICAgICAgMTkyLFxuICAgICAgNTIsXG4gICAgICA4NSxcbiAgICAgIDMyLFxuICAgICAgODMsXG4gICAgICA5OSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA4OSxcbiAgICAgIDk5LFxuICAgICAgOTEsXG4gICAgICAxNTMsXG4gICAgICAxNjksXG4gICAgICAxNTEsXG4gICAgICAyNDQsXG4gICAgICA5MyxcbiAgICAgIDE5MSxcbiAgICAgIDEyNSxcbiAgICAgIDEzNixcbiAgICAgIDU5LFxuICAgICAgMjM4LFxuICAgICAgNTUsXG4gICAgICA3MyxcbiAgICAgIDIyMyxcbiAgICAgIDcsXG4gICAgICAyMzMsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0VDTTJFUExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM5NTA4ODkzMTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSVNIQU4gQUtIVEFSXCIsXG4gICAgXCJsaWRcIjogXCIyNDUxMDU1MTI0Mzk5Mjg6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbm91bU1RMHZDbnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ4Y2FQbXpvYmlzcEFuTjRKQmJtUFJVZmRDN3ZlSEFDU2hzcUVBR3NzbkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiODBHYnBRMXJjc3RLVVY5N1hVS2lhMVVpQnRiVHg1cjQ3WVdhbkRtTzcvUkZnVHJDVS9pb0g2RWJaNHd5blNad3pVblZ5SmZoSGE2MERmVnRCbE1WQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidTVuVVZNb3IyemRHSDJ3dzZiZGtsOEFScFZCamQyNFl4TFRGejJxTktvQmgyN2k1dzlNUTBlcXR2VCtvbkl3bVpGOVo5VGdzV0FRM2tTa0Q0dFRJZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5Mzk1MDg4OTMxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0MTUxOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5aZi5qc29uIjogIntcImtleURhdGFcIjpcImgrOGZzakFQNklKWFR6M2t0Rm5pQk5jbitoaHl2YkthL01ETzJaT1NrdFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4NTgxNjg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MTUxOTM3NTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
