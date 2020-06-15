const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzIyMjA0NTU5OTM3ODk2NDQ5.XufvaQ.i75OJ1LzSibaGvEnxB9n9zW06O4);//BOT_TOKEN is the Client Secret
