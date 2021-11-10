const chalk = require("chalk");
const startup = 
`
╭─────────────────────────────────────────────────────╮
│                                                     │
│ Conway's Game of Life - in NodeJS, for the console! │
│ Made by Sumukh Prasad                               │
│                                                     │
╰─────────────────────────────────────────────────────╯
`;
function printStartup(n) {
	console.clear();
	console.log(chalk.cyan.bold(startup));
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, n);
	});
}

module.exports = { printStartup };