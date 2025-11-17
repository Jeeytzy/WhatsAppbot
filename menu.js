require('./config');
require('./Awang');
const fs = require('fs')
const chalk = require('chalk')

global.menu = `
◤─「 *LIST MENU* 」─✦
│⦿ 〔.menuall
│⦿ 〔.menuowner
│⦿ 〔.menugroup
│⦿ 〔.menupush
│⦿ 〔.menustore
◣──────────❈
`

global.menuowner = `
◤─「 *O W N E R* 」─✦
│⦿ 〔.listowner
│⦿ 〔.addowner
│⦿ 〔.delowner
│⦿ 〔.listgc
│⦿ 〔.onlygc
│⦿ 〔.listprem
│⦿ 〔.delprem
│⦿ 〔.public
│⦿ 〔.self
◣──────────❈
`

global.menugroup = `
◤─「 *G R O U P* 」─✦
│⦿ 〔.kick
│⦿ 〔.tagall
│⦿ 〔.hidetag
│⦿ 〔.totag
│⦿ 〔.setppgc
│⦿ 〔.delppgc
│⦿ 〔.promote
│⦿ 〔.demote
│⦿ 〔.open
│⦿ 〔.close
│⦿ 〔.opentime
│⦿ 〔.closetime
│⦿ 〔.linkgc
│⦿ 〔.resetlinkgc
│⦿ 〔.antilinkgc
│⦿ 〔.antilinkch
│⦿ 〔.antiwame
│⦿ 〔.antilinkig
│⦿ 〔.antilinkall
│⦿ 〔.delete
◣──────────❈
`
global.menupush = `
◤─「 *P U S H* 」─✦
│⦿ 〔.pushkontak
│⦿ 〔.pushkontak2
│⦿ 〔.savekontak
│⦿ 〔.savekontak2
◣──────────❈
`
global.menustore = `
◤─「 *S T O R E* 」─✦
│⦿ 〔.cekidch
│⦿ 〔.upch
│⦿ 〔.sendgc
│⦿ 〔.proses
│⦿ 〔.done
│⦿ 〔.list
│⦿ 〔.listproduk
│⦿ 〔.addlist
│⦿ 〔.dellist
│⦿ 〔.updatelist
│⦿ 〔.payment
◣──────────❈
`
//============{ Import } =============