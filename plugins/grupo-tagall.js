let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝙘𝙚𝙤𝙜𝙚𝙧𝙞𝙥𝙞𝙪𝙢.𝙙𝙯𝙣🫦 ${pesan}`
let teks = `*𝙈𝙞𝙘𝙝𝙞 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙡𝙖𝙣𝙩𝙖🌱🗣️*\n${oi}\n\n*🌟𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `💫✨ @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
