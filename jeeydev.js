require('./config');
require('./menu');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const fetch = require('node-fetch')
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const nou = require('node-os-utils');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const genshindb = require("genshin-db")
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
let db_respon_list = JSON.parse(fs.readFileSync('./lib/list-message.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
const { msgFilter } = require('./lib/antispam')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, RejeeydevectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediajeeydevInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisjeeydevectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = jeeydev = async (jeeydev, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? jeeydev.user.id.split(":")[0] + "@s.whatsapp.net" || jeeydev.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `${setprefix}`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const pler = JSON.parse(fs.readFileSync('./command/idgrup.json').toString())
        const aksesGB = isGroup ? pler.includes(m.chat) : false
        const botNumber = await jeeydev.decodeJid(jeeydev.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await jeeydev.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qkontak = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');
//
        if (time2 < "05:00:00") {
	ucapanWaktu = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗮𝗴𝗶 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗮𝗴𝗶 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗶𝗮𝗻𝗴 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗼𝗿𝗲 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗲𝘁𝗮𝗻𝗴 🌆";
}
//

  //
        const menureply = (teks) => {
jeeydev.sendMessage(m.chat, {
buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'select menu',
          sections: [
            {
              title: `Jeeyhosting⚡`,
              rows: [
                {
                  title: 'Semua Menu',
                  description: foother, 
                  id: `.menuall`
                },
                {
                  title: 'Menu Owner',
                  description: foother, 
                  id: `.menuowner`
                  },
                {
                  title: 'Menu Group',
                  description: foother, 
                  id: `.menugroup`
                  },
                {
                  title: 'Menu Push',
                  description: foother, 
                  id: `.menupush`
                   }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
image: { url: "https://files.catbox.moe/8fen9e.jpg" },
caption: `❛❛ 𝗛𝗮𝗶, 𝗜'𝗺 digitalbot 🍁 ❛❛

┏━━[ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 ]━━〣
┃ ▣ [ Nama : ${m.pushName}
┃ ▣ [ Number : ${m.sender.split("@")[0]}
┃ ▣ [ Role : ${isCreator ? 'Owner' : isPremium ? 'VIP' : 'Free'}
┗━━━━━━━━━━━━━━━━〣

┏━━[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]━━〣
┃ ▣ [ Develofer : Jeeyhosting
┃ ▣ [ Nama Bot : digitalbot
┃ ▣ [ Version : ${versi}
┃ ▣ [ Total Fitur : ${totalfitur}
┃ ▣ [ Uptime : ${runtime(process.uptime())}
┃ ▣ [ Type Script : Case
┃ ▣ [ Mode Bot : ${jeeydev.public ? `Public Mode` : `Self Mode`}
┗━━━━━━━━━━━━━━━━〣

╭━━━━━━━━━━━━━━━━━━━〣
│𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗕𝗼𝘁 𝗗𝗲𝗻𝗴𝗮𝗻 𝗕𝗶𝗷𝗮𝗸!!
╰━━━━━━━━━━━━━━━━━━━〣
${teks}`,
contextInfo:{
mentionedJid:[sender],
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: "120363419664387625@newsletter",
newsletterName: `Jeeyhosting 🛒`,
serverId: 200
}, 
externalAdReply: {
title: `© Jeeyhosting`, 
thumbnailUrl: "https://files.catbox.moe/acdbn2.jpg", 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://jeey.surge.sh🍁", 
}}
}, {quoted: m })
}
//
const reply = (teks) => {
jeeydev.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
      newsletterJid: `120363419664387625@newsletter`,
      serverMessageId: Math.floor(Math.random() * 1000) + 1,
      newsletterName: `Sunoo-Ai WhatsApp`,
    },
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
"title": `Sunoo,🍁`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://files.catbox.moe/yyaava.jpg',
"sourceUrl": ''}}},
{ quoted: m})
}
//
  
async function loading() {
      var nln = [
        `[—] [10%]%`,
        `[——] [20%]%`,
        `[———] [30%]%`,
        `[————] [40%]`,
        `[—————] [50%]`,
        `[——————] [60%]`,
        `[———————] [70%]`,
        `[————————] [80%]`,
        `[—————————] [90%]`,
        `[——————————] [100%]`,
        ``,
      ]
      let {
        key
      } = await jeeydev.sendMessage(from, {
        text: '[Tunggu Sebentar]'
      }, {
        quoted: m
      })
      
      for (let i = 0; i < nln.length; i++) {
        await sleep(100)
        await jeeydev.sendMessage(from, {
          text: nln[i],
          edit: key
        }, {
          quoted: m
        });
      }
    }
    //
    async function loadai() {
      var nln = [
        `${text}`,
      ]
      let {
        key
      } = await jeeydev.sendMessage(from, {
        text: 'Mengetik...'
      }, {
        quoted: m
      })
      
      for (let i = 0; i < nln.length; i++) {
        await sleep(1000)
        await jeeydev.sendMessage(from, {
          text: nln[i],
          edit: key
        }, {
          quoted: m
        });
      }
    }
//
async function jeeydevReact() {
      jeeydev.sendMessage(from, {
        react: {
          text: "🕑",
          key: m.key
        }
      })
    }
//
const p_c = prefix + command
//
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize,
            randomKarakter
            } = require('./lib/myfunction');         
//theme sticker reply
        const jeeydevwet = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/wait.webp')
        jeeydev.sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        const jeeydevadmn = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/admin.webp')
        jeeydev.sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        const jeeydevbotadmin = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/botadmin.webp')
        jeeydev.sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        const jeeydevowner = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/owner.webp')
        jeeydev.sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        const jeeydevongb = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/group.webp')
        jeeydev.sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        const jeeydevpriv = () => {
        let jeeydevStickRep = fs.readFileSync('./lib/sticker_reply/prem.webp')
        .sendMessage(from, { sticker: jeeydevStickRep }, { quoted: m })
        }
        let cihuy = thumbnail
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#000000").bold(`▢ New Message Script By jeeydev-Ofc`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            jeeydev.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
//

// Anti spam
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${p_c} [${args.length}]`), 'from', color(m.pushName))
return await jeeydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// AntiBot
global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}
if (
  m.isGroup &&
  !isOwner &&
  global.antibotGroups[m.chat]
) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
    m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}
  let isPossibleBot =
    pushName.match(/botz|bot|wa bot|whatsapp bot/) ||
    textMsg.match(/hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses/i) ||
    textMsg.match(/hello user|please wait|click the button|your request is being processed/i) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null
  if (isPossibleBot) {
    global.botWarnings[groupId] = global.botWarnings[groupId] || {}
    global.botWarnings[groupId][sender] = (global.botWarnings[groupId][sender] || 0) + 1
    const warnCount = global.botWarnings[groupId][sender]
    if (warnCount <= 2) { // max warn ubah ae
      await jeeydev.sendMessage(groupId, {
        text: `⚠️ *Antibot aktif!*\nBot tidak diizinkan di grup ini!\nPeringatan ke-${warnCount}/3`,
        mentions: [sender]
      })
      await jeeydev.sendMessage(groupId, { delete: m.key }).catch(() => {})
    } else {
      await jeeydev.sendMessage(groupId, {
        text: `Bot @${sender.split('@')[0]} telah dikeluarkan dari grup karena melanggar aturan.`,
        mentions: [sender]
      })
      await jeeydev.groupParticipantsUpdate(groupId, [sender], 'remove').catch(() =>
        jeeydev.sendMessage(groupId, { text: '⚠️ Gagal kick bot. Mungkin bot bukan admin.' })
      )
      delete global.botWarnings[groupId][sender]
    }
  }
}
//
        async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./jeeydev.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./jeeydev.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
//
// FUNCTION
if (global.autotyping) {
if (command) { jeeydev.readMessages([m.key])}
jeeydev.sendPresenceUpdate('composing', from)
}
if (global.autoread) {
jeeydev.readMessages([m.key])
        };

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}


jeeydev.enhancer = jeeydev.enhancer ? jeeydev.enhancer : {};
        
jeeydev.autoshalat = jeeydev.autoshalat ? jeeydev.autoshalat : {}
    let id = m.chat
    if (id in jeeydev.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:04',
    terbit: '05:23',
    dhuha: '05:46',
    dzuhur: '11:30',
    ashar: '14:33',
    magrib: '17:37',
    isya: '18:47',
    }
    const datek = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }))
const hours = datek.getHours()
const minutes = datek.getMinutes()
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        jeeydev.autoshalat[id] = [
            jeeydev.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./lib/image/jdw.png'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                        mentions: participants.map(a => a.id)
                    }),
            setTimeout(async () => {
                delete jeeydev.autoshalat[m.chat]
            }, 57000)
        ]
    }
}
        if (!isOwner && global.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return jeeydev.sendMessage(m.chat, {image: {url: thumbnail }, caption: `*akses ditolak*\n\nBot Sedang Mode Only Group, Join group agar bisa menggunakan bot\n${linkgc}` }, {quoted: m})
//
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//
//============= [ COMMANDS ] ====================================================
        switch (command) {
        case "menu": {
const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
        await jeeydev.sendMessage(m.chat, {
  productMessage: {
    title: `🤖 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁`,
    description: "Simple Bot",
    thumbnail: "https://files.catbox.moe/y9ch8d.jpg",
    productId: "123456789",
    retailerId: "DIGITALBOT",
    footer: `❛❛ 𝗛𝗮𝗶, 𝗜'𝗺 DigitalBot md 👋 ❛❛

┏━━[ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 ]━━〣
┃ ▣ [ Nama : ${m.pushName}
┃ ▣ [ Number : ${m.sender.split("@")[0]}
┃ ▣ [ Role : ${isCreator ? 'Owner' : isPremium ? 'VIP' : 'Free'}
┗━━━━━━━━━━━━━━━━〣

┏━━[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]━━〣
┃ ▣ [ Develofer : Aleale_⛅
┃ ▣ [ Nama Bot : DigitalBot 🛒
┃ ▣ [ Version : ${versi}
┃ ▣ [ Total Fitur : ${totalfitur}
┃ ▣ [ Uptime : ${runtime(process.uptime())}
┃ ▣ [ Type Script : Case x Plugin (CJS)
┃ ▣ [ Mode Bot : ${jeeydev.public ? `Public Mode` : `Self Mode`}
┗━━━━━━━━━━━━━━━━〣

╭───⧁ 𝐀𝐊𝐒𝐄𝐒 𝐌𝐄𝐍𝐔 ⧁─────
✦ 𝗣𝗶𝗹𝗶𝗵 𝗕𝘂𝘁𝘁𝗼𝗻 𝗗𝗮𝗻 𝗡𝗶𝗸𝗺𝗮𝘁𝗶 𝗙𝗶𝘁𝘂𝗿
╰─⧁═══════════════⧁───`,   
    buttons: [
      {
        "name": "single_select",
"buttonParamsJson": 
`{
  "title": "select menu",
  "sections": [
    {
      "title": "${foother}",
      "rows": [
        {
          "header": "Semua Menu",
          "title": "Untuk Menampilkan Semua Menu Bot",
          "highlight_label": 'Recomended',
          "description": "DigitalBot 🛒 [AllMenu]",
          "id": ".menuall"
          },
        {
          "header": "Owner Menu",
          "title": "Untuk Menampilkan Owner Menu",
          "description": "DigitalBot 🛒 [Owner]",
          "id": ".menuowner"
          },
        {
          "header": "Group Menu",
          "title": "Untuk Menampilkan Menu Group",
          "description": "DigitalBot 🛒 [Group]",
          "id": ".menugroup"
          },
        {
          "header": "Push Menu",
          "title": "Untuk Menampilkan Menu Push",
          "description": "DigitalBot 🛒 [Push]",
          "id": ".menupush"
          }
        {
          "header": "Store Menu",
          "title": "Untuk Menampilkan Menu Toko",
          "description": "DigitalBot 🛒 [Store]",
          "id": ".menustore"
          }
      ]
    }
  ]
}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Channel\",\"url\":\"https://whatsapp.com/channel/0029Vb6qsAKEAKWOIp8g2q2M\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6qsAKEAKWOIp8g2q2M\"}`
      }
    ]
  }
}, { quoted: m })
}
        break
case 'owner': {
let name = m.pushName || jeeydev.getName(m.sender);
let pan = `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak \`${name}\`, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./lib/image/thumb1.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: jeeydev.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/image/thumb1.jpg' } }, { upload: jeeydev.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: global.namabot,
          hasMediaAttachment: false
        }),
                body: {
                  text: `┏───────────────┈ 
┆     「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ Jeeyhosting ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Kirim pesan\",\"url\":\"https://wa.me/${global.owner}?text=Hai+Owner\",\"merchant_url\":\"https://whatsapp.com\"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/image/thumb2.jpg' } }, { upload: jeeydev.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: global.namabot,
          hasMediaAttachment: false
        }),
                body: {
                  text: `┏───────────────┈ 
┆     「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ Hayase Yuuka ]\`* ]==─
┆ • Jangan Spam Bot
┆ • Jangan Telpon/Call Bot 
┆ • Gaudah Chat Yg Aneh Aneh
┆ • Beli Prem Dll Chat Owner
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Kirim pesan\",\"url\":\"https://wa.me/${global.nobot}?text=.menu\",\"merchant_url\":\"https://whatsapp.com\"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await jeeydev.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
// ============{ Menu } ===============//
case "menuall": {
const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
        await jeeydev.sendMessage(m.chat, {
  productMessage: {
    title: `🤖 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁`,
    description: "Simple Bot",
    thumbnail: "https://files.catbox.moe/w9jmt1.jpg",
    productId: "123456789",
    retailerId: "DIGITALBOT",
    footer:`❛❛ 𝗛𝗮𝗶, 𝗜'𝗺 DigitalBot 👋 ❛❛

◤──「 𝗕𝗢𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 」──✦ 
⎆ [ Halo saya bot MD
⎆ [ Di buat oleh Aleale_official
⎆ [ Saya siap membantu kamu
◣──────────❈

◤──「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」──✦ 
⎆ [ *Develofer :* Aleale_⛅
⎆ [ *Nama Bot :* DigitalBot 🛒
⎆ [ *Version :* ${versi}
⎆ [ *Total Fitur :* ${totalfitur}
⎆ [ *Uptime :* ${runtime(process.uptime())}
⎆ [ *Type Script :* Case x Plugin (CJS)
⎆ [ *Mode Bot :* ${jeeydev.public ? `Public Mode` : `Self Mode`}
◣──────────❈

╭──────────────────
│𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗕𝗼𝘁 𝗗𝗲𝗻𝗴𝗮𝗻 𝗕𝗶𝗷𝗮𝗸!!
╰──────────────────

▭▬▭▬▭▬▭▬▭▬▭▬▭

┏━━[ *A L L - M E N U* ]━━〣
┃ ◤─「 *O W N E R* 」─✦
┃ │⦿〔.listowner
┃ │⦿〔.addowner
┃ │⦿〔.delowner
┃ │⦿〔.listgc
┃ │⦿〔.onlygc
┃ │⦿〔.listprem
┃ │⦿〔.delprem
┃ │⦿〔.public
┃ │⦿〔.self
┃ ◣──────────❈
┃
┃ ◤─「 *G R O U P* 」─✦
┃ │⦿〔.kick
┃ │⦿〔.tagall
┃ │⦿〔.hidetag
┃ │⦿〔.totag
┃ │⦿〔.setppgc
┃ │⦿〔.delppgc
┃ │⦿〔.promote
┃ │⦿〔.demote
┃ │⦿〔.open
┃ │⦿〔.close
┃ │⦿〔.opentime
┃ │⦿〔.closetime
┃ │⦿〔.linkgc
┃ │⦿〔.resetlinkgc
┃ │⦿〔.antilinkgc
┃ │⦿〔.antilinkch
┃ │⦿〔.antiwame
┃ │⦿〔.antilinkig
┃ │⦿〔.antilinkall
┃ │⦿〔.delete
┃ ◣──────────❈
┃ ◤─「 *P U S H* 」─✦
┃ │⦿〔.pushkontak
┃ │⦿〔.pushkontak2
┃ │⦿〔.savekontak
┃ │⦿〔.savekontak2
┃ ◣──────────❈
┃ ◤─「 *S T O R E* 」─✦
┃ │⦿〔.cekidch
┃ │⦿〔.upch
┃ │⦿〔.sendgc
┃ ◣──────────❈`,
buttons: [
      {
        "name": "single_select",
"buttonParamsJson": 
`{
  "title": "select menu",
  "sections": [
    {
      "title": "${foother}",
      "rows": [
        {
          "header": "Semua Menu",
          "title": "Untuk Menampilkan Semua Menu Bot",
          "highlight_label": 'Recomended',
          "description": "DigitalBot 🛒 [AllMenu]",
          "id": ".menuall"
          },
        {
          "header": "Owner Menu",
          "title": "Untuk Menampilkan Owner Menu",
          "description": "DigitalBot 🛒 [Owner]",
          "id": ".menuowner"
          },
        {
          "header": "Group Menu",
          "title": "Untuk Menampilkan Menu Group",
          "description": "DigitalBot 🛒 [Group]",
          "id": ".menugroup"
          },
          "header": "Store Menu",
          "title": "Untuk Menampilkan Menu Toko",
          "description": "DigitalBot 🛒 [Store]",
          "id": ".menustore"
          }
      ]
    }
  ]
}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Channel\",\"url\":\"https://whatsapp.com/channel/0029Vb6qsAKEAKWOIp8g2q2M\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6qsAKEAKWOIp8g2q2M\"}`
      }
    ]
  }
}, { quoted: m })
}
        break
case "menuowner": {
jeeydevReact()
menureply(`${global.menuowner}`)
}
break
case "menugroup": {
jeeydevReact()
menureply(`${global.menugroup}`)
}
break
case "menupush": {
jeeydevReact()
menureply(`${global.menupush}`)
}
break
case "menustore": {
jeeydevReact()
menureply(`${global.menustore}`)
}
break

// ============{ Batas }==========//
// ============Owner
case 'sendch': {
  if (!text) return m.reply(`Contoh: ${p_c} text`)
  
  let teks = `${text}`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${idch}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await jeeydev.sendMessage(id, {
  productMessage: {
    title: "Asisten Ai 🍁",
    description: "Simple Bot",
    thumbnail: "https://files.catbox.moe/hgbkf4.jpg",
    productId: "123456789",
    retailerId: "DIGITALBOT",
    body: teks,
    footer: "Asisten-Ai",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "Mulai Chat",
          url: "https://t.me/Jeeyhosting",
          merchant_url: "https://t.me/Jeeyhosting"
        })
      }
    ]
  }
}, { quoted: m })
}


  m.reply('Berhasil mengirim pesan')
}
break
case "listcase": {
if (!isOwner) return reply(mess.owner)
const code = fs.readFileSync('jeeydev.js', 'utf8');
const regex = /case\s+["'`](.+?)["'`]\s*:/g;
let match;
const cases = [];
while ((match = regex.exec(code)) !== null) {
  cases.push(match[1]);
}
return reply(`
*Total Case:* ${cases.length}

> ${cases.join("\n> ")}
`)
}
break
case "reactch":
case "rch": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️jeeydev\n.reactch https://whatsapp.com/channel/xxx/123 ❤️jeeydev|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const argsa = mainText.trim().split(" ");
    const link = argsa[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️biyu|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = argsa.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return m.reply("Masukkan teks/emoji untuk direaksikan.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await jeeydev.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await jeeydev.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        m.reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Gagal memproses permintaan!");
    }
}
break
case "clearchat":
      case "clc":
        {
          if (!isOwner) {
            return reply(mess.owner);
          }
          jeeydev.chatModify({
            delete: true,
            lastMessages: [{
              key: m.key,
              messageTimestamp: m.messageTimestamp
            }]
          }, m.chat);
        }
        break;
case "rvo": case "readviewonce": {
 if (!isOwner) return reply(mess.owner);
if (!m.quoted) return reply("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return reply("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return jeeydev.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return jeeydev.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return jeeydev.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case 'listgc': {
 if (!isOwner) return reply(mess.owner);

 try {
 const getGroups = await jeeydev.groupFetchAllParticipating();
 const groups = Object.values(getGroups);

 if (!groups.length) return reply('❌ Bot belum gabung di grup manapun.');

 let teks = `⬣ *LIST GROUP ${namaBot.toUpperCase()}*\n📊 Total Grup: ${groups.length}\n\nBerikut daftar grup:\n\n`;

 const buttons = [];

 groups.forEach((g, i) => {
 const groupId = g.id;
 const groupName = g.subject;
 const memberCount = g.participants?.length || 0;
 const created = moment(g.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm') + ' WIB';

 teks += `*${i + 1}. ${groupName}*\n`;
 teks += `🆔 ID: ${groupId}\n👥 Member: ${memberCount}\n🕐 Dibuat: ${created}\n\n`;

 buttons.push({
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: `📋 Copy ID GC #${i + 1}`,
 copy_code: groupId,
 id: `gc-${i + 1}`
 })
 });
 });

 await jeeydev.sendMessage(m.chat, {
 text: teks,
 footer: `📌 Klik tombol untuk copy ID grup`,
 title: `📃 Daftar Grup Aktif`,
 interactiveButtons: buttons
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 cpe('❌ Gagal mengambil data grup.');
 }
}
break

case "listowner": case "listown": {
if (owner.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
jeeydev.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: m})
}
break


case "delowner": case "delown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owner.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owner.indexOf(input)
await owner.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case "addowner": case "addown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owner.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owner.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}

break
case "joingc": case "join": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("linkgcnya")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await jeeydev.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}

break
case "listprem": {
if (!isOwner) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
jeeydev.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qkontak})
}
break
case "addprem": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
case "delprem": {
    if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
case "public":{
if (!isOwner) return reply(mess.owner)
jeeydev.public = true
reply(`successfully changed to ${p_c}`)
}
break
case "self":{
if (!isOwner) return reply(mess.owner)
jeeydev.public = false
reply(`successfully changed to ${p_c}`)
}
break
case 'delppbot': {
if (!isOwner) return reply(mess.owner)
await jeeydev.removeProfilePicture(jeeydev.user.id)
reply(`Berhasil Menghapus Gambar Profil Bot`)
}
break
case 'setppbot':{
if (!isOwner) return reply(mess.owner)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return pesan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await jeeydev.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await jeeydev.query({
tag: 'iq',
attrs: {
to: botNumber,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply("done")
} else {
var memeg = await jeeydev.updateProfilePicture(botNumber, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}
}

break
case "tojs": case "q": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
case 'readchange': case 'autoread':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}

break
    case 'autotyping': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}

break               
case 'autosholat': {
jeeydev.autoshalat = jeeydev.autoshalat ? jeeydev.autoshalat : {}

 if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)

 if (text === "on") {
 jeeydev.autoshalat[sender] = {
 messages: []
 };
 m.reply(`[ ✓ ] sukses mode*\`Auto-Sholat\`* : ᴀᴋᴛɪғ`);
 } else if (text === "off") {
 delete jeeydev.autoshalat[sender];
 m.reply(`[ ✓ ] sukses mode *\`Auto-Sholat\`* : ɴᴏɴᴀᴋᴛɪғ`);
 }
};
break 
    case 'onlygc': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.onlygc = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.onlygc = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break                         
case 'antilinkall': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkall = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.Antilinkall = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break            
case 'autoaigc':
case 'autoai': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoaigc = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.autoaigc = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
case 'autobio': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.autobio = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
// ============Group
case "gc": {

if (!isOwner) return reply(mess.owner);

await jeeydev.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '',
          sections: [
            {
              title: `© ${namaBot}`,
              rows: [
                {
                  title: 'Buka Group',
                  description: 'open', 
                  id: `.open`
                },
                {
                  title: 'Tutup Group',
                  description: 'close', 
                  id: `.close`
                }             
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Setting Group"
}, { quoted: m })
}
break
case 'delete':
			case 'd':
			case 'del': {
			
if (!isOwner) return reply(mess.owner);

				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await jeeydev.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
case 'antibot': {

if (!isOwner) return reply(mess.owner);

if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antibotGroups = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.antibotGroups = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break            

case 'antilink4':
case 'antilinkig': {

if (!isOwner) return reply(mess.owner);

if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkig = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.Antilinkig = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
case 'antilink3':
case 'antiwame': {

if (!isOwner) return reply(mess.owner);

if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antiWame = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.antiWame = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
case 'antilink2':
case 'antilinkch': {

if (!isOwner) return reply(mess.owner);

if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkch = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.Antilinkch = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
case 'antilink':
case 'antilinkgc': {

if (!isOwner) return reply(mess.owner);

if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkgc = true
await m.reply(`Sukses mengaktifkan ${p_c}.`)
} else if (args[0] === 'off') {
global.Antilinkgc = false
await m.reply(`Sukses menonaktifkan ${p_c}.`)
}}

break               
case'dor': case "kick": case "kik": {

if (!isOwner) return reply(mess.owner);

if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await jeeydev.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await jeeydev.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply("@tag/reply")
}
}

break
case "linkgc": {

if (!isOwner) return reply(mess.owner);

const urlGrup = "https://chat.whatsapp.com/" + await jeeydev.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await jeeydev.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}

break
case "resetlinkgc": {

if (!isOwner) return reply(mess.owner);

await jeeydev.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}

break
case "totag":{
if (!isOwner) return reply(mess.owner)
 let users = participants.map(u => u.id).filter(v => v !== jeeydev.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 jeeydev.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'closetime':

if (!isOwner) return reply(mess.owner);

if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
jeeydev.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {

if (!isOwner) return reply(mess.owner);

if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
jeeydev.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}

break

case "closegc": case "close": 
case "opengc": case "open": {

if (!isOwner) return reply(mess.owner);

m.reply(`${p_c}time 1 detik`)
}
break
case "demote":
case "promote": {

if (!isOwner) return reply(mess.owner);

if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await jeeydev.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await jeeydev.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply("@tag/6285###")
}
}
case 'gddl':
    case 'gdrive': {
      try {
        if (!text) return m.reply(`*Penggunaan Salah!*\ncontoh: .gdrive (link)`)
         await jeeydev.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${text}`)
        let fileName = hao.data.name
        return await jeeydev.sendMessage(m.chat, {
          document: {
            url: hao.data.download
          },
          mimetype: 'application/zip',
          fileName: fileName
        }, {
          quoted: m
        })
      } catch (err) {
        console.error('Kesalahan pada API:', err)
        m.reply('Terjadi kesalahan')
      }
    }

break
case 'mediafire':
    case 'mfdl': {
      try {
        if (!text) return m.reply(`*Penggunaan Salah!*\ncontoh: .mediafire Linknya`)
        if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
        
        await jeeydev.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
        let data = api.result?.[0]

        let fileNama = decodeURIComponent(data.nama || 'file.zip')
        let extension = fileNama.split('.').pop().toLowerCase()

        let res = await axios.get(data.link, {
          responseType: 'arraybuffer'
        })
        let media = Buffer.from(res.data)

        let mimetype = ''
        if (extension === 'mp4') mimetype = 'video/mp4'
        else if (extension === 'mp3') mimetype = 'audio/mp3'
        else mimetype = `application/${extension}`

        jeeydev.sendMessage(m.chat, {
          document: media,
          fileName: fileNama,
          mimetype: mimetype
        }, {
          quoted: m
        })

      } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
      }
    }

break
case 'git': case 'gitclone': {
if (!args[0]) return reply(`*Penggunaan Salah!*\ncontoh: ${p_c} (link)`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    jeeydev.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("error"))
}
break

case "tourl": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await jeeydev.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'jeeydev.png');

let teks = directLink.toString()
await jeeydev.sendMessage(m.chat, {
  productMessage: {
    title: `Aku Adalah Sunoo 😘`,
    description: "Simple Bot",
    thumbnail: "https://files.catbox.moe/caplpa.jpg",
    productId: "123456789",
    retailerId: "DIGITALBOT",
    footer: teks,
    buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy URL\",\"id\":\"${directLink}\",\"copy_code\":\"${directLink}\"}`
       }
    ]
  }
}, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl2': {
				if (!mime) return reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				try {
					let media = await jeeydev.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						reply(response);
					} else {
					reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}

break ;    
    // Push
    case "pushkontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idgrup|pesannya")
if (!text.split("|")) return m.reply("idgrup|pesannya")
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await jeeydev.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await jeeydev.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await jeeydev.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await jeeydev.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "pushkontak2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
if (!text) return m.reply("pesannya")
const teks = text
const jidawal = m.chat
const data = await jeeydev.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await jeeydev.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await jeeydev.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await jeeydev.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break
case "savekontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idgrupnya")
let res = await jeeydev.groupMetadata(m.chat)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await jeeydev.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
let res = await groupMetadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await jeeydev.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
case "idch":
case "cekidch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await jeeydev.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
await jeeydev.sendMessage(m.chat, {
  productMessage: {
    title: `Aku Adalah digitalbot😘`,
    description: "Simple Bot",
    thumbnail: "https://files.catbox.moe/zgj93w.jpg",
    productId: "123456789",
    retailerId: "DIGITALBOT",
    footer: teks,
    buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"${res.id}\",\"copy_code\":\"${res.id}\"}`
       }
    ]
  }
}, { quoted: m })
}
			break;

default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                // Anti Wame
          if (global.antiWame)
  if (budy.includes(`https://wa.me`)) {

bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await jeeydev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			jeeydev.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Gc
if (global.Antilinkgc)
  if (budy.includes(`https://chat.whatsapp`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await jeeydev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			jeeydev.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilink Ch
if (global.Antilinkch)
  if (budy.includes(`https://whatsapp.com/channel/`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await jeeydev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			jeeydev.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Ig
if (global.Antilinkig)
  if (budy.includes(`https://www.instagram.com/`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await jeeydev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			jeeydev.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilinkall
if (global.Antilinkall)
  if (budy.includes(`https://`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await jeeydev.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			jeeydev.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//
if (global.autobio) {
			jeeydev.updateProfileStatus(`${namaBot} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}
//

                if (budy.startsWith('>')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
