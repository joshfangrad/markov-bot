const message = require('./message.js');
const config = require('../config.js');

module.exports = function(bot) {

    bot.on ('ready', () => {
        console.log(`${bot.user.username} is ready.`);
    });

    bot.on('disconnect', () => {
        console.log(`${bot.user.username} disconnected.`);
    });

    bot.on('reconnecting', () => {
        console.log(`${bot.user.username} is reconnecting...`);
    });

    bot.on('message', (msg) => {
        if (msg.content.substring(0,1) === config.commandChar && msg.content.length > 1) {
            message.commandHandler(msg);
        } else {
            message.messageHandler(msg);
        }
    });
};