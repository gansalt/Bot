let handler = async m => m.reply(`
╭─「 Donasi • Tri」
│ •  [0895363560748]
╰────
╭─「 Donasi • Gopay 」
│ •  [0895363560748]
╰────
╭─「 Donasi • Dana 」
│ •  [Soon]
╰────

Nomor owner utama wa.me/62895363560748

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler