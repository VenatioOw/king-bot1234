var Discord = require('discord.io');
var logger = require('winston');
// var auth = require('./auth.json');
var fs = require('fs');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});

logger.level = 'debug';

var bot = new Discord.Client({
	token: process.env.BOT_TOKEN,
	autorun: true
});

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
	if(user == 'Shadowking') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
		
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
						message: 'The Toad Licker has spoken!'
					});
				break;
			}
		}
	}
	if(user == 'William') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
			
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
							message: 'The Queen has spoken!'
					});
				break;
			}
		}
	}
	if(user == 'Ryuu') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
			
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
							message: 'The Dick has spoken!'
					});
				break;
			}
		}
	}
	if(user == 'Leagle') {
		if(message.substring(0, 1) == '@') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];
			
			args = args.splice(1);
			switch(cmd) {
				case 'everyone':
					bot.sendMessage({
						to: channelID,
							message: 'Father has spoken!'
					});
				break;
			}
		}
	}
	if(user == 'William') {
		bot.addReaction({
			channelID: channelID,
			messageID: messageID,
			reaction: ":grinning:"
		}, function(err, res) {
			if(err) {throw err; }
		});
	}
});
