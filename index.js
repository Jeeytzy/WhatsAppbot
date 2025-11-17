console.clear();
console.log("Terimakasih Telah Menggunakan Script Dari Jeeyhosting");
require("./config");
const {
  default: makeWASocket,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  generateWAMessageFromContent,
  generateWAMessageContent,
  generateWAMessage,
  jidDecode,
  proto,
  delay,
  relayWAMessage,
  getContentType,
  getAggregateVotesInPollMessage,
  downloadContentFromMessage,
  fetchLatestWaWebVersion,
  InteractiveMessage,
  makeCacheableSignalKeyStore,
  Browsers,
  generateForwardMessageContent,
  MessageRetryMap
} = require("@whiskeysockets/baileys");
const cfonts = require("cfonts");
const pino = require("pino");
const FileType = require("file-type");
const readline = require("readline");
const fs = require('fs');
const crypto = require("crypto");
const {
  smsg,
  sleep,
  getBuffer
} = require("./lib/myfunction");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  addExif
} = require("./lib/exif");
const question = _0x2edf65 => {
  const _0x37a771 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x4006c4 => {
    _0x37a771.question(_0x2edf65, _0x4006c4);
  });
};
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
cfonts.say('jeeydev', {
  'font': "block",
  'align': "left",
  'colors': ["#ff00ff", 'white'],
  'background': "transparent",
  'rawMode': false
});
async function jeeydevstart() {
  const {
    state: _0x3871e0,
    saveCreds: _0x4b778b
  } = await useMultiFileAuthState('session');
  const _0x4f42ac = makeWASocket({
    'printQRInTerminal': false,
    'syncFullHistory': true,
    'markOnlineOnConnect': true,
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'generateHighQualityLinkPreview': true,
    'patchMessageBeforeSending': _0x5d9ba7 => {
      const _0x31a6d6 = !!_0x5d9ba7.buttonsMessage || !!_0x5d9ba7.templateMessage || !!_0x5d9ba7.listMessage;
      if (_0x31a6d6) {
        _0x5d9ba7 = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x5d9ba7
            }
          }
        };
      }
      return _0x5d9ba7;
    },
    'version': (await (await fetch("https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json")).json()).version,
    'browser': ["Ubuntu", 'Chrome', "20.0.04"],
    'logger': pino({
      'level': "fatal"
    }),
    'auth': {
      'creds': _0x3871e0.creds,
      'keys': makeCacheableSignalKeyStore(_0x3871e0.keys, pino().child({
        'level': "silent",
        'stream': "store"
      }))
    }
  });
  if (true && !_0x4f42ac.authState.creds.registered) {
    const _0xebad2d = await question("\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⣤⡶⠁⣠⣴⣾⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⢀⣴⣿⣿⣴⣿⠿⠋⣁⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⣰⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀\n⠀⣠⣾⣿⡿⠟⠋⠉⠀⣀⣀⣀⣨⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣤⣴⠂\n⠈⠉⠁⠀⠀⣀⣴⣾⣿⣿⡿⠟⠛⠉⠉⠉⠉⠉⠛⠻⠿⠿⠿⠿⠿⠿⠟⠋⠁⠀\n⠀⠀⠀⢀⣴⣿⣿⣿⡿⠁⠀⢀⣀⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⣾⣿⣿⣿⡿⠁⢀⣴⣿⠋⠉⠉⠉⠉⠛⣿⣿⣶⣤⣤⣤⣤⣶⠖⠀⠀⠀\n⠀⠀⢸⣿⣿⣿⣿⡇⢀⣿⣿⣇⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀\n⠀⠀⠸⣿⣿⣿⣿⡇⠈⢿⣿⣿⠇⠀⠀⠀⠀⠀⢠⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢿⣿⣿⣿⣷⡀⠀⠉⠉⠀⠀⠀⠀⠀⢀⣾⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠙⢿⣿⣿⣷⣄⡀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣋⣠⡤⠄⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠿⠿⠿⠿⠿⠿⠟⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀\n© jeeydev Stenly \n╭────────────────╼\n╎Enter Your Number Here : \n╰────────────────╼ ");
    const _0x167209 = await _0x4f42ac.requestPairingCode(_0xebad2d, 'JEEYVIPP');
    console.log("\n╭────────────────╼\n╎ This Your Pairing Code : " + _0x167209 + "\n╰────────────────╼");
  }
  store.bind(_0x4f42ac.ev);
  _0x4f42ac.ev.on("messages.upsert", async (_0x278632, _0x20e25c) => {
    try {
      const _0x376cc0 = _0x278632.messages[0x0];
      if (!_0x376cc0.message) {
        return;
      }
      _0x376cc0.message = Object.keys(_0x376cc0.message)[0x0] === "ephemeralMessage" ? _0x376cc0.message.ephemeralMessage.message : _0x376cc0.message;
      if (_0x376cc0.key && _0x376cc0.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x4f42ac["public"] && !_0x376cc0.key.fromMe && _0x278632.type === "notify") {
        return;
      }
      if (_0x376cc0.key.id.startsWith("BAE5") && _0x376cc0.key.id.length === 0x10) {
        return;
      }
      if (_0x376cc0.key.id.startsWith("FatihArridho_")) {
        return;
      }
      const _0x3770c8 = smsg(_0x4f42ac, _0x376cc0, store);
      require("./jeeydev")(_0x4f42ac, _0x3770c8, _0x278632, store);
    } catch (_0x3face1) {
      console.log(_0x3face1);
    }
  });
  _0x4f42ac.decodeJid = _0x3f0de9 => {
    if (!_0x3f0de9) {
      return _0x3f0de9;
    }
    if (/:\d+@/gi.test(_0x3f0de9)) {
      let _0x4de5f4 = jidDecode(_0x3f0de9) || {};
      return _0x4de5f4.user && _0x4de5f4.server && _0x4de5f4.user + '@' + _0x4de5f4.server || _0x3f0de9;
    } else {
      return _0x3f0de9;
    }
  };
  _0x4f42ac.ev.on("contacts.update", _0x704371 => {
    for (let _0x17d740 of _0x704371) {
      let _0x1f4702 = _0x4f42ac.decodeJid(_0x17d740.id);
      if (store && store.contacts) {
        store.contacts[_0x1f4702] = {
          'id': _0x1f4702,
          'name': _0x17d740.notify
        };
      }
    }
  });
  _0x4f42ac['public'] = true;
  _0x4f42ac.ev.on("connection.update", async _0x20f0b7 => {
    const {
      connection: _0x27bb65,
      lastDisconnect: _0x5801ad
    } = _0x20f0b7;
    if (_0x27bb65 === "open") {
      const _0x41b073 = ["120363419664387625@newsletter", '120363419664387625@newsletter', "120363419664387625@newsletter"];
      for (const _0x29f7e6 of _0x41b073) {
        try {
          await _0x4f42ac.newsletterFollow(_0x29f7e6);
        } catch {}
      }
    }
    if (_0x27bb65 === 'close') {
      const _0x1d0cab = _0x5801ad?.["error"]?.['output']?.['statusCode'] || _0x5801ad?.['error']?.["statusCode"] || DisconnectReason.connectionClosed;
      if (_0x1d0cab !== DisconnectReason.loggedOut) {
        try {
          jeeydevstart();
        } catch {}
        console.log("Tersambung Kembali");
      }
    }
    console.log(_0x20f0b7);
  });
  _0x4f42ac.ev.on("group-participants.update", async _0x36cdf9 => {
    await (await import("./gc.js"))["default"](_0x4f42ac, _0x36cdf9);
  });
  _0x4f42ac.sendText = async (_0x1790c0, _0x14a75d, _0xc91525 = '', _0x234cfc) => {
    _0x4f42ac.sendMessage(_0x1790c0, {
      'text': _0x14a75d,
      ..._0x234cfc
    }, {
      'quoted': _0xc91525
    });
  };
  _0x4f42ac.downloadMediaMessage = async _0x3b2f57 => {
    let _0x13925e = (_0x3b2f57.msg || _0x3b2f57).mimetype || '';
    let _0x2f3768 = _0x3b2f57.mtype ? _0x3b2f57.mtype.replace(/Message/gi, '') : _0x13925e.split('/')[0x0];
    const _0x1c8d58 = await downloadContentFromMessage(_0x3b2f57, _0x2f3768);
    let _0x22945f = Buffer.from([]);
    for await (const _0x4929fa of _0x1c8d58) {
      _0x22945f = Buffer.concat([_0x22945f, _0x4929fa]);
    }
    return _0x22945f;
  };
  _0x4f42ac.sendImageAsSticker = async (_0x529f10, _0x2db754, _0x175b16, _0x94740d = {}) => {
    let _0xbc7e1f = Buffer.isBuffer(_0x2db754) ? _0x2db754 : /^data:.*?\/.*?;base64,/i.test(_0x2db754) ? Buffer.from(_0x2db754.split`, `[0x1], "base64") : /^https?:\/\//.test(_0x2db754) ? await await getBuffer(_0x2db754) : fs.existsSync(_0x2db754) ? fs.readFileSync(_0x2db754) : Buffer.alloc(0x0);
    let _0xeea8db;
    if (_0x94740d && (_0x94740d.packname || _0x94740d.author)) {
      _0xeea8db = await writeExifImg(_0xbc7e1f, _0x94740d);
    } else {
      _0xeea8db = await addExif(_0xbc7e1f);
    }
    await _0x4f42ac.sendMessage(_0x529f10, {
      'sticker': {
        'url': _0xeea8db
      },
      ..._0x94740d
    }, {
      'quoted': _0x175b16
    });
    return _0xeea8db;
  };
  _0x4f42ac.downloadAndSaveMediaMessage = async (_0x5dbb96, _0xf8ffd6, _0x1cc489 = true) => {
    let _0x2e2e48 = _0x5dbb96.msg ? _0x5dbb96.msg : _0x5dbb96;
    let _0x2dd198 = (_0x5dbb96.msg || _0x5dbb96).mimetype || '';
    let _0x3ba397 = _0x5dbb96.mtype ? _0x5dbb96.mtype.replace(/Message/gi, '') : _0x2dd198.split('/')[0x0];
    const _0x451655 = await downloadContentFromMessage(_0x2e2e48, _0x3ba397);
    let _0x597fa9 = Buffer.from([]);
    for await (const _0x2f322e of _0x451655) {
      _0x597fa9 = Buffer.concat([_0x597fa9, _0x2f322e]);
    }
    let _0xf7ad14 = await FileType.fromBuffer(_0x597fa9);
    let _0x3c8174 = _0x1cc489 ? _0xf8ffd6 + '.' + _0xf7ad14.ext : _0xf8ffd6;
    await fs.writeFileSync(_0x3c8174, _0x597fa9);
    return _0x3c8174;
  };
  _0x4f42ac.sendVideoAsSticker = async (_0x458dfb, _0x3a9d0a, _0x4869aa, _0x3b1101 = {}) => {
    let _0x331469 = Buffer.isBuffer(_0x3a9d0a) ? _0x3a9d0a : /^data:.*?\/.*?;base64,/i.test(_0x3a9d0a) ? Buffer.from(_0x3a9d0a.split`, `[0x1], "base64") : /^https?:\/\//.test(_0x3a9d0a) ? await await getBuffer(_0x3a9d0a) : fs.existsSync(_0x3a9d0a) ? fs.readFileSync(_0x3a9d0a) : Buffer.alloc(0x0);
    let _0x29b311;
    if (_0x3b1101 && (_0x3b1101.packname || _0x3b1101.author)) {
      _0x29b311 = await writeExifVid(_0x331469, _0x3b1101);
    } else {
      _0x29b311 = await videoToWebp(_0x331469);
    }
    await _0x4f42ac.sendMessage(_0x458dfb, {
      'sticker': {
        'url': _0x29b311
      },
      ..._0x3b1101
    }, {
      'quoted': _0x4869aa
    });
    return _0x29b311;
  };
  _0x4f42ac.albumMessage = async (_0x416ad4, _0x192da3, _0x4a1302) => {
    const _0x3eda49 = generateWAMessageFromContent(_0x416ad4, {
      'messageContextInfo': {
        'messageSecret': crypto.randomBytes(0x20)
      },
      'albumMessage': {
        'expectedImageCount': _0x192da3.filter(_0xd7b2fc => _0xd7b2fc.hasOwnProperty("image")).length,
        'expectedVideoCount': _0x192da3.filter(_0x26f326 => _0x26f326.hasOwnProperty("video")).length
      }
    }, {
      'userJid': _0x4f42ac.user.jid,
      'quoted': _0x4a1302,
      'upload': _0x4f42ac.waUploadToServer
    });
    await _0x4f42ac.relayMessage(_0x416ad4, _0x3eda49.message, {
      'messageId': _0x3eda49.key.id
    });
    for (let _0x336329 of _0x192da3) {
      const _0x5752ed = await generateWAMessage(_0x416ad4, _0x336329, {
        'upload': _0x4f42ac.waUploadToServer
      });
      _0x5752ed.message.messageContextInfo = {
        'messageSecret': crypto.randomBytes(0x20),
        'messageAssociation': {
          'associationType': 0x1,
          'parentMessageKey': _0x3eda49.key
        },
        'participant': '0@s.whatsapp.net',
        'remoteJid': "status@broadcast",
        'forwardingScore': 0x1869f,
        'isForwarded': true,
        'mentionedJid': [_0x416ad4],
        'starred': true,
        'labels': ['Y', 'Important'],
        'isHighlighted': true,
        'businessMessageForwardInfo': {
          'businessOwnerJid': _0x416ad4
        },
        'dataSharingContext': {
          'showMmDisclosure': true
        }
      };
      _0x5752ed.message.forwardedNewsletterMessageInfo = {
        'newsletterJid': '0@newsletter',
        'serverMessageId': 0x1,
        'newsletterName': "WhatsApp",
        'contentType': 0x1,
        'timestamp': new Date().toISOString(),
        'senderName': "✧ Dittsans",
        'content': "Text Message",
        'priority': 'high',
        'status': 'sent'
      };
      _0x5752ed.message.disappearingMode = {
        'initiator': 0x3,
        'trigger': 0x4,
        'initiatorDeviceJid': _0x416ad4,
        'initiatedByExternalService': true,
        'initiatedByUserDevice': true,
        'initiatedBySystem': true,
        'initiatedByServer': true,
        'initiatedByAdmin': true,
        'initiatedByUser': true,
        'initiatedByApp': true,
        'initiatedByBot': true,
        'initiatedByMe': true
      };
      await _0x4f42ac.relayMessage(_0x416ad4, _0x5752ed.message, {
        'messageId': _0x5752ed.key.id,
        'quoted': {
          'key': {
            'remoteJid': _0x3eda49.key.remoteJid,
            'id': _0x3eda49.key.id,
            'fromMe': true,
            'participant': _0x4f42ac.user.jid
          },
          'message': _0x3eda49.message
        }
      });
    }
    return _0x3eda49;
  };
  _0x4f42ac.sendStatusMention = async (_0x2f04c1, _0x57bbe7 = []) => {
    let _0x5eddd2;
    for (let _0x4dc07d of _0x57bbe7) {
      let _0x49aceb = await _0x4f42ac.groupMetadata(_0x4dc07d);
      _0x5eddd2 = await _0x49aceb.participants.map(_0x55fa48 => _0x4f42ac.decodeJid(_0x55fa48.id));
    }
    ;
    let _0x2772a9 = await _0x4f42ac.sendMessage("status@broadcast", _0x2f04c1, {
      'backgroundColor': "#000000",
      'font': Math.floor(Math.random() * 0x9),
      'statusJidList': _0x5eddd2,
      'additionalNodes': [{
        'tag': 'meta',
        'attrs': {},
        'content': [{
          'tag': 'mentioned_users',
          'attrs': {},
          'content': _0x57bbe7.map(_0x2880df => ({
            'tag': 'to',
            'attrs': {
              'jid': _0x2880df
            },
            'content': undefined
          }))
        }]
      }]
    });
    _0x57bbe7.forEach(_0x216fcc => {
      _0x4f42ac.relayMessage(_0x216fcc, {
        'groupStatusMentionMessage': {
          'message': {
            'protocolMessage': {
              'key': _0x2772a9.key,
              'type': 0x19
            }
          }
        }
      }, {
        'userJid': _0x4f42ac.user.jid,
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {
            'is_status_mention': "true"
          },
          'content': undefined
        }]
      });
      delay(0x9c4);
    });
    return Message;
  };
  _0x4f42ac.ev.on('creds.update', _0x4b778b);
  return _0x4f42ac;
}
jeeydevstart();
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});