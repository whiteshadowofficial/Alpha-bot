    /* # Exclusively Sophia
    # @lasiya99X t.me/lasiya99X
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "need some word"


    if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'alphax ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Sophia*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'alphax ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ππΈππΌπΌπβπΈβ€οΈββ€βΜ±Μ±Μ±Μ±ΜΜΜΜΛ’α΅α΅Κ³α΅ α΅α΅α΅π₯*\nMEMBER OF *β¬α΄yΚβ’α΄Κ α΄Κβα΄yβ Κα΄α΄α΄Κα΄α΄Κκ±*\n\n' })

    }));

}
