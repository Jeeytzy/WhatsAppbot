// Script By AwangxOffc ID
// Jika Ingin Repost/recode/rename jangan lupa tag gw

require('./config');
const { WA_DEFAULT_EPHEMERAL } = require('@whiskeysockets/baileys').default

function GroupParticipants(Awang, { id, participants, action, author }) {
    Awang.groupMetadata(id)
        .then(gcdata => {
            const subject = gcdata.subject

            for (const jid of participants) {
                let check = author && author !== jid && author.length > 1
                let tag = check ? [author, jid] : [jid]

                switch (action) {
                    case "add":
                        Awang.sendMessage(id, {image: {url: `https://files.catbox.moe/8fen9e.jpg` }, caption: `╭━━━━━━━━━━━━━✧
┃𝗛𝗮𝗶 @${jid.split("@")[0]} 👋
╰╮「 𝐊𝐀𝐑𝐓𝐔 𝐈𝐍𝐓𝐑𝐎 」
╭━━━━━━━━━━━━━✧
┃ • 𝗡𝗮𝗺𝗮 :
┃ • 𝗨𝗺𝘂𝗿 :
┃ • 𝗞𝗲𝗹𝗮𝘀 :
┃ • 𝗚𝗲𝗻𝗱𝗲𝗿 :
┠━━━━━━━━━━━━━━━━━✧
┃Selamat datang di *${subject}* 
┃Jangan lupa baca deskripsi grup 
┃dan tetap patuhi aturan. 😊✨
┗ ━━━━━━━━━━━━━━━━✧`,
                                contextInfo: { mentionedJid: [jid] }
                            },
                            { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                        )
                        break

                    case "remove":
                        Awang.sendMessage(id, {image: {url: `https://img1.pixhost.to/images/9079/645882316_zion.jpg` }, caption: `Selamat tinggal @${jid.split("@")[0]} 👋\nSemoga sukses di luar sana! 🚀`,
                                contextInfo: { mentionedJid: [jid] }
                            },
                            { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                        )
                        break

                    case "promote":
                        if (author) {
                            Awang.sendMessage(
                                id,
                                {
                                    text: `🎉 *@${author.split("@")[0]} telah menjadikan @${jid.split("@")[0]} sebagai admin grup ini!* 👑`,
                                    contextInfo: { mentionedJid: [...tag] }
                                },
                                { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                            )
                        }
                        break

                    case "demote":
                        if (author) {
                            Awang.sendMessage(
                                id,
                                {
                                    text: `😔 *@${author.split("@")[0]} telah menghapus @${jid.split("@")[0]} dari jabatan admin grup ini.* 🚫`,
                                    contextInfo: { mentionedJid: [...tag] }
                                },
                                { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                            )
                        }
                        break

                    default:
                        console.log(`⚠️ Aksi tidak dikenal: ${action} untuk ${jid} di grup ${subject}`)
                }
            }
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports = GroupParticipants