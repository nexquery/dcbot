/*
 * 		Discord AURORA BOT
 * 
 * 	Dosya:
 * 		bot.mjs
 * 
 * 	Kodlama:
 * 		Burak (Nexor)
 * 
 * 	Tarih:
 * 		21.04.2024, 19:03:09
 */

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [ GatewayIntentBits.Guilds ] });

client.once('ready', () => {
    console.log(`Bot Başlatıldı: ${client.user.tag}`);
});

const e = 'MTIyNTU2MDMwOTcyOTU5NTQ4Mg';
const x = 'Gy2mS-';
const p = 'PNe14EWMWtUDOwmd89AEIo5ckM6Q9h';
const t = 'OaJpOZU';

client.login(`${e}.${x}.${p}-${t}`);