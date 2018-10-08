const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '>';

const token = 'NDk3ODA0MDQ2NzkxMzQ0MTM4.DpzZOA.aqzD-2G6gXPzqE2u4kP5LU0RXLI';

client.login(token);



client.on('ready', () => {
	console.log('Hello, im ready');
	
	client.user.setGame('Discord', 'https://twitch.tv/kareem');
})
