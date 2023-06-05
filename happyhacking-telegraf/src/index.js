require('dotenv').config()
const {Telegraf, Markup} = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
    ctx.reply(
        'Welcome! Give the button a light tap and marvel at the React application 🧤',
        Markup.inlineKeyboard([
            Markup.button.webApp(
                "Marvel",
                process.env.WEB_APP_URL
            ),
        ])
    );
});

bot.on('message', (ctx) => {
    ctx.reply(
        'Relax and have fun in the app 🏒',
        Markup.inlineKeyboard([
            Markup.button.webApp(
                "Get relax",
                process.env.WEB_APP_URL
            ),
        ])
    );
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));