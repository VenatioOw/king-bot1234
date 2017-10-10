var Discord = require('discord.io');
var logger = require('winston');
var fs = require('fs');
var bot = new Discord.Client();

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});

logger.level = 'debug';

bot.on('ready', function (evt) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message ,evt) {
	if(message.substring(0, 1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];
		
		args = args.splice(1);
		switch(cmd) {
			case 'ping':
				bot.sendMessage({
					to: channelID,
					message: 'Pong!'
				});
			break;
		}
	}
	if(user == 'Shadowdancer') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
		
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
						message: 'The @King has spoken!'
					});
				break;
			}
		}
	}
	if(user == 'Venatio') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
			
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
							message: 'The @Queen has spoken!'
					});
				break;
			}
		}
	}
});

bot.login(process.env.BOT_TOKEN);
