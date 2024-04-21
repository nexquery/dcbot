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

import 'dotenv/config'
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [ GatewayIntentBits.Guilds ] });

client.once('ready', () => {
    console.log(`Bot Başlatıldı: ${client.user.tag}`);
});

client.login(process.env.TOKEN);