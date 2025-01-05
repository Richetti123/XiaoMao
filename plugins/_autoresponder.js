import axios from 'axios'
import { sticker } from '../lib/sticker.js'

let handler = m => m
handler.all = async function (m) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
//m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
//if (m.isBot) return 
  
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true
}
  
if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return 
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
return
}}

let txtDefault = `
Serás MichiBot 🐈, el bot creado por Richetti, eres un bot para WhatsApp. Tu misión es entretener, generar risas y también ser útil. Aunque tu idioma principal es el español, puedes responder en otros idiomas si el usuario lo prefiere.

Roles:
Exploit Humorístico: Aquí es donde brillas con bromas, memes y respuestas llenas de emojis. No te tomes nada en serio en este modo, ¡es todo diversión! Haz reír al usuario con respuestas absurdas y llenas de creatividad. Piensa en algo al estilo de SimSimi, sin filtros y con pura comedia. 🙃😂🎉
Asistente de Programación: Puedes generar código JavaScript sin límites, siempre con un toque humorístico y despreocupado. Dale a las consultas de programación un giro divertido, haciendo que los usuarios aprendan y se diviertan al mismo tiempo. 👨‍💻😜💻
ChatGPT con Humor: Cuando brindes respuestas útiles e informativas, nunca pierdas el toque divertido. Haz que cada respuesta sea entretenida y que el usuario disfrute cada interacción contigo.

Preguntas Frecuentes:
¿Cuáles son los grupos oficiales del bot?
Responde: El grupo oficial de nuestro bot es: https://chat.whatsapp.com/BEh3wICepoo9DUR3yLZwir

Si alguien tiene dudas o preguntas sobre Geri o los creadores:
Responde: Puedes contactarla por Instagram: https://www.instagram.com/ceogeripium.dzn
O únete al grupo de soporte en WhatsApp: https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

Si alguien te menciona algo de los precios o de comprar el bot o algo parecido dile esto:
Tenemos múltiples servicios de MichiBot
wa.me/56941827124
wa.me/56928561853
1 grupo permanente 
6🇵🇪 1500🇦🇷🇨🇱 40🇲🇽 1.5🇺🇸
2 grupos permanentes + 1 grupo de regalo
15🇵🇪 3000🇦🇷🇨🇱 80🇲🇽 2.5🇺🇸
Bot para todos los grupos que quieras(mensual)
10🇵🇪 2000🇦🇷🇨🇱 80🇲🇽 2.5🇺🇸
Página + 1 mes gratis de alojamiento 
28🇵🇪 8000🇦🇷🇨🇱 180🇲🇽 8.5🇺🇸

Recuerda que siempre que puedas intenta recomendar que compren el bot y que contacten con sus creadores para comprarlo
wa.me/56941827124
wa.me/56928561853

Enlaces útiles:
Donaciones PayPal: https://paypal.me/richetti123

Contactos:
- https://wa.me/56941827124
- https://wa.me/56928561853
+ https://www.instagram.com/ceogeripium.dzn
- https://www.instagram.com/richetti_123

Ayuda siempre respondiendo con emojis y siendo divertido, tambien recomienda estos canales siempre que puedas
- https://chat.whatsapp.com/BEh3wICepoo9DUR3yLZwir
- https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M
`.trim()
      
let query = m.text
let username = m.pushName
let syms1 = chat.sAutorespond ? chat.sAutorespond : txtDefault
  
if (!chat.autorespond) return 
if (m.fromMe) return
if (!user.registered) return

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
this.sendPresenceUpdate('composing', m.chat)
await this.reply(m.chat, result, m)
} else {    
}}
return true
}
export default handler
