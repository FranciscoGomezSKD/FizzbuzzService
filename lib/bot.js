const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5308719467:AAEY3XeNKDDik-xC-1qq21EblYO5JIZMkkw";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    const mission = msg.text.toLowerCase(); 

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.getValidationInNumber(numberToApplyFb);
        console.log(fizzbuzzTrick);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else if(mission == 'node'){
        const stack = ExplorerController.getExplorersUsernamesByMission('node');
        const responseBot = `Los explorers que estan en la mision node son: \n${stack}`;
        bot.sendMessage(chatId, responseBot);
    } else if(mission == 'java'){
        const stack = ExplorerController.getExplorersUsernamesByMission('java');
        const responseBot = `Los explorers que estan en la mision node son: \n${stack}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
bot.on("polling_error", console.log);