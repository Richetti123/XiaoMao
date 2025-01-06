let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝕰𝖑 𝖒𝖊𝖏𝖔𝖗 𝖇𝖔𝖙 𝖉𝖊 𝖙𝖔𝖉𝖔𝖘 𝕸𝖎𝖆𝖚𝖜!😼💯 ${pesan}`
let teks = `*𝘔𝘪𝘤𝘩𝘪𝘉𝘰𝘵 𝘵𝘦 𝘪𝘯𝘷𝘰𝘤𝘢 𝘳𝘢𝘵𝘢🐁🧀*\n${oi}\n\n*@𝕮𝖊𝖔𝕲𝖊𝖗𝖎𝕻𝖎𝖚𝖒.𝕯𝖟𝖓🫦*\n`
for (let mem of participants) {
teks += `⛱️☀️𑁤 @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
