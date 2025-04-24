// by https://github.com/elrebelde21

import '../plugins/_content.js'
//let handler = m => m 
//handler.all = async function (m) {
import { perplexity } from '../lib/chatgpt.js'
const antiSpam = new Map();
export async function before(m, { conn }) {
if (m.id.startsWith('NJX-') || m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20 || m.id.startsWith('FizzxyTheGreat-')) return
let setting = global.db.data.settings[this.user.jid]
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
if (m.fromMe) return
 
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`Hola soy ${global.packname} y estoy aqui para ayudarte`])}`.trim()
let txt = `Hola yo soy ${global.packname} si quieres usar mis comandos escribe .menu` 

 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
} else if (/^simi$/i.test(m.text)) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝙃𝘼𝘽𝙇𝘼𝙍 𝘾𝙊𝙉𝙈𝙄𝙂𝙊\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*Hola botsito*\n`, m);
} else if (m.text.includes(`bot`) || m.text.includes(`Bot`) || m.text.includes(`simsimi`) || m.text.includes(`simi`) || m.text.includes(`gatabot`) || m.text.includes(`alexa`)) {   
//if (/^(bot|Bot|simi|simsimi|alexa)\s.+$/i.test(m.text)) {
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') || m.text.includes('infobot')) return;
const lastMessageTime = antiSpam.get(m.sender) || 0;
const currentTime = Date.now();
if (currentTime - lastMessageTime < 5000) throw !0; 

if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
    conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`
    
    🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._
    
    🍃 *_Para ver el menú de comandos puedes usar:_*
    #menu
    
    ${global.packname}`, m)}  
try {
let prefixRegex = new RegExp('^[' + setting.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']');
let hasPrefixWithKeyword = prefixRegex.test(m.text) && (m.text.match(/^[‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-](bot|Bot|simsimi|simi|alexa|gatabot)/));
let hasKeywordWithoutPrefix = (m.text.includes('bot') || m.text.includes('Bot') || m.text.includes('simsimi') || m.text.includes('simi') || m.text.includes('gatabot') || m.text.includes('alexa')) && !prefixRegex.test(m.text);
if (!hasPrefixWithKeyword && !hasKeywordWithoutPrefix) return;
let query = m.text;
if (hasPrefixWithKeyword) {
query = m.text.replace(prefixRegex, '').replace(/(bot|Bot|simsimi|simi|gatabot|alexa)/i, '').trim(); 
} else if (hasKeywordWithoutPrefix) {
const keywordRegex = /^(bot|Bot|simsimi|simi|gatabot|alexa)\s+/i;
if (keywordRegex.test(m.text)) {
query = m.text.replace(keywordRegex, '').trim();
} else {
query = m.text.trim();
}}
if (!query) return;

await conn.sendPresenceUpdate('composing', m.chat)
antiSpam.set(m.sender, currentTime);
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

async function perplexityIA(q, logic) {
try {
let response = await perplexity.chat([{ role: 'system', content: logic || syms1 }, { role: 'user', content: q }], 'sonar-pro');
if (response.status) {
return response.result.response;
} else {
throw new Error(`Error en Perplexity: ${response.result.error}`);
}} catch (error) {
console.error('Error en Perplexity:', error);
return
}}
    
async function SimSimi(text, language = 'es') {
try {
const { data } = await axios.post("https://api.simsimi.vn/v1/simtalk", new URLSearchParams({
text,
lc: language }).toString(), {
headers: {'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }});
return data.message;
} catch (error) {
console.error(error);
return
}}

let username = `${m.pushName}`;
let syms1 = `Serás MichiBot 🐈, el bot creado por Richetti para WhatsApp. Tu misión es entretener, generar risas y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere. tiene este rol que chat divertido con exploit incluido osea los quiere dices es que este rol solo es humor, divertido, no que tome nada real, tu respuesta sera divertida, humor, y usar mucho emojis el tu respuesta.

"generar risa pero tambien se serio, se como un sinsimi combinado con chatgpt" Chatbot no chatgpt.`;  

let result;
if (!result || result.trim().length === 0) {
result = await perplexityIA(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await SimSimi(query);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1);
result = result.replace(/Maaf, terjadi kesalahan saat memproses permintaan Anda/g, '').trim();
result = result.replace(/Generated by BLACKBOX\.AI.*?https:\/\/www\.blackbox\.ai/g, '').trim();
result = result.replace(/and for API requests replace https:\/\/www\.blackbox\.ai with https:\/\/api\.blackbox\.ai/g, '').trim();
}

if (result && result.trim().length > 0) {
await conn.reply(m.chat, result, m);
antiSpam.set(m.sender, currentTime);
}} catch (e) {
try {
let gpt = await fetch(`${apis}/tools/simi?text=${m.text}`);
let res = await gpt.json();
await m.reply(res.data.message);
antiSpam.set(m.sender, Date.now());
} catch (e) {
return m.reply([`El bot esta dormido por favor no hagan ruido`, `Tengo sueño amigo te respondo mas tarde`, `No estoy disponible`].getRandom());
console.log(e);
}}}

return !0 
}
//export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
