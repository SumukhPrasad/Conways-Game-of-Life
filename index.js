const { printStartup } = require("./modules/startupBanner");
const { Board } = require("./modules/Board");

const gameArray = 
[
	[
	  '█', '█', '░', '░', '░', '█', '█', '░', '░', '█',
	  '░', '░', '█', '░', '░', '█', '█', '░', '█', '░',
	  '█', '░', '░', '█', '█', '█', '░', '░', '░', '░',
	  '█', '█', '░', '░', '█', '░', '░', '█', '░', '░',
	  '█', '█', '░', '█', '█', '█', '░', '█', '░', '█',
	  '█', '░', '░', '█', '█', '█', '█', '█', '█', '█',
	  '█', '█', '░', '█', '█', '░', '█', '█', '█', '░',
	  '░', '░', '█', '█', '█', '█', '█', '█', '░', '░'
	],
	[
	  '░', '░', '░', '░', '░', '░', '█', '█', '░', '░',
	  '█', '█', '█', '█', '█', '█', '█', '░', '█', '█',
	  '█', '█', '░', '█', '░', '█', '█', '█', '░', '░',
	  '█', '█', '█', '░', '░', '█', '░', '░', '░', '░',
	  '░', '█', '█', '░', '░', '█', '░', '░', '█', '░',
	  '█', '█', '░', '█', '░', '░', '░', '█', '█', '░',
	  '░', '░', '█', '░', '█', '█', '█', '░', '█', '░',
	  '░', '█', '░', '░', '█', '█', '█', '█', '░', '░'
	],
	[
	  '░', '░', '█', '█', '█', '░', '░', '░', '█', '░',
	  '█', '░', '█', '░', '█', '░', '░', '█', '░', '░',
	  '░', '░', '░', '░', '█', '░', '░', '█', '█', '░',
	  '█', '░', '░', '░', '░', '░', '░', '░', '░', '█',
	  '░', '░', '█', '░', '█', '░', '░', '█', '░', '█',
	  '░', '░', '░', '░', '░', '░', '█', '█', '█', '░',
	  '░', '░', '░', '█', '░', '█', '█', '█', '░', '█',
	  '░', '░', '░', '░', '█', '░', '█', '░', '░', '░'
	],
	[
	  '█', '░', '░', '░', '░', '█', '█', '░', '█', '█',
	  '░', '░', '█', '█', '░', '░', '░', '░', '░', '░',
	  '█', '█', '░', '░', '░', '░', '█', '█', '█', '█',
	  '░', '█', '█', '░', '░', '█', '░', '░', '█', '█',
	  '█', '█', '░', '░', '░', '█', '░', '░', '█', '░',
	  '█', '█', '░', '░', '█', '█', '░', '█', '░', '░',
	  '░', '█', '░', '█', '█', '░', '█', '█', '░', '█',
	  '█', '█', '█', '█', '█', '█', '░', '░', '█', '█'
	],
	[
	  '░', '█', '█', '░', '█', '█', '█', '░', '█', '█',
	  '░', '█', '█', '█', '░', '░', '░', '█', '█', '█',
	  '░', '░', '█', '█', '█', '░', '░', '░', '█', '█',
	  '░', '█', '█', '█', '░', '█', '░', '█', '░', '█',
	  '░', '░', '█', '░', '█', '░', '░', '█', '░', '█',
	  '█', '█', '█', '█', '░', '░', '█', '░', '█', '░',
	  '░', '░', '█', '█', '█', '░', '░', '█', '█', '░',
	  '░', '░', '█', '█', '░', '█', '░', '█', '░', '░'
	],
	[
	  '█', '█', '░', '░', '░', '█', '█', '█', '░', '█',
	  '█', '█', '░', '█', '░', '█', '█', '█', '░', '░',
	  '░', '░', '█', '░', '░', '█', '█', '░', '█', '█',
	  '█', '░', '█', '░', '░', '░', '░', '░', '░', '█',
	  '█', '█', '░', '█', '█', '█', '░', '█', '░', '█',
	  '█', '█', '░', '░', '░', '░', '█', '░', '░', '█',
	  '░', '░', '░', '█', '█', '░', '░', '░', '█', '░',
	  '█', '█', '█', '░', '░', '░', '█', '█', '█', '░'
	],
	[
	  '░', '█', '█', '░', '█', '░', '█', '░', '░', '█',
	  '░', '░', '░', '█', '░', '░', '░', '░', '█', '█',
	  '░', '░', '█', '█', '█', '░', '░', '░', '█', '█',
	  '█', '░', '█', '█', '░', '█', '░', '░', '█', '░',
	  '░', '░', '█', '█', '█', '░', '░', '░', '░', '█',
	  '█', '█', '█', '█', '░', '█', '░', '█', '█', '░',
	  '█', '░', '█', '█', '█', '█', '░', '█', '░', '░',
	  '█', '█', '█', '█', '█', '░', '░', '░', '█', '░'
	],
	[
	  '░', '░', '█', '░', '░', '█', '░', '░', '░', '█',
	  '█', '█', '█', '░', '█', '░', '░', '█', '█', '░',
	  '░', '█', '█', '░', '░', '█', '█', '░', '░', '░',
	  '█', '░', '░', '█', '░', '█', '█', '█', '█', '░',
	  '█', '█', '░', '█', '░', '█', '█', '█', '█', '█',
	  '█', '█', '█', '░', '░', '█', '░', '█', '█', '█',
	  '█', '█', '░', '█', '░', '░', '░', '░', '█', '░',
	  '░', '█', '░', '█', '█', '█', '░', '░', '█', '░'
	],
	[
	  '░', '█', '█', '░', '░', '█', '░', '█', '░', '░',
	  '░', '░', '█', '░', '█', '░', '░', '░', '░', '░',
	  '░', '█', '░', '█', '█', '░', '█', '░', '█', '█',
	  '░', '█', '█', '░', '█', '░', '░', '░', '░', '░',
	  '█', '░', '░', '█', '█', '█', '░', '░', '░', '█',
	  '░', '░', '░', '░', '█', '█', '█', '█', '█', '░',
	  '█', '█', '█', '░', '░', '░', '░', '█', '░', '░',
	  '█', '░', '█', '█', '░', '█', '░', '░', '░', '░'
	],
	[
	  '░', '█', '░', '░', '░', '░', '█', '░', '░', '░',
	  '█', '░', '█', '█', '█', '█', '░', '░', '█', '░',
	  '█', '█', '█', '░', '█', '░', '░', '░', '█', '█',
	  '█', '█', '█', '█', '░', '░', '░', '░', '░', '░',
	  '░', '█', '░', '░', '░', '█', '█', '░', '░', '█',
	  '█', '█', '░', '░', '█', '░', '█', '█', '░', '█',
	  '█', '░', '█', '░', '░', '█', '█', '░', '░', '░',
	  '░', '░', '░', '█', '░', '░', '░', '░', '█', '█'
	],
	[
	  '░', '░', '░', '░', '░', '░', '█', '░', '░', '░',
	  '░', '█', '█', '█', '░', '█', '░', '█', '█', '█',
	  '░', '░', '░', '░', '█', '█', '█', '░', '█', '░',
	  '█', '░', '█', '░', '░', '█', '░', '░', '█', '█',
	  '░', '█', '█', '░', '█', '█', '█', '█', '█', '█',
	  '█', '░', '█', '░', '█', '█', '█', '█', '░', '█',
	  '█', '░', '░', '█', '█', '░', '░', '█', '░', '█',
	  '█', '█', '░', '█', '░', '█', '░', '█', '█', '░'
	],
	[
	  '█', '█', '█', '█', '░', '░', '░', '█', '█', '█',
	  '█', '░', '█', '█', '█', '░', '█', '█', '░', '█',
	  '█', '░', '░', '█', '░', '░', '░', '░', '░', '░',
	  '█', '█', '█', '░', '░', '░', '█', '█', '░', '░',
	  '░', '█', '█', '░', '█', '░', '░', '░', '░', '█',
	  '█', '░', '█', '█', '█', '░', '░', '█', '█', '█',
	  '█', '█', '░', '░', '░', '█', '█', '█', '█', '░',
	  '█', '█', '█', '░', '░', '█', '░', '░', '█', '█'
	],
	[
	  '░', '░', '█', '░', '░', '█', '░', '█', '░', '░',
	  '░', '█', '░', '░', '░', '█', '░', '█', '█', '█',
	  '░', '░', '█', '░', '█', '█', '█', '█', '░', '░',
	  '█', '░', '█', '█', '█', '█', '░', '░', '░', '░',
	  '█', '░', '█', '█', '█', '░', '░', '█', '█', '█',
	  '░', '░', '█', '░', '█', '█', '░', '█', '█', '█',
	  '░', '█', '█', '█', '█', '█', '░', '░', '█', '█',
	  '█', '░', '░', '░', '░', '░', '░', '█', '░', '█'
	],
	[
	  '█', '█', '░', '█', '░', '█', '█', '█', '░', '█',
	  '░', '░', '░', '░', '░', '█', '░', '░', '█', '░',
	  '░', '░', '█', '░', '░', '░', '█', '░', '█', '░',
	  '░', '░', '█', '░', '░', '░', '░', '░', '█', '█',
	  '░', '█', '░', '█', '█', '█', '█', '░', '█', '█',
	  '█', '█', '█', '█', '░', '░', '░', '░', '░', '█',
	  '░', '█', '░', '░', '░', '█', '█', '█', '█', '░',
	  '█', '█', '░', '█', '█', '█', '░', '░', '░', '█'
	],
	[
	  '░', '░', '█', '█', '░', '█', '█', '█', '░', '█',
	  '░', '█', '░', '░', '█', '█', '█', '█', '░', '█',
	  '░', '█', '█', '░', '█', '█', '█', '█', '█', '█',
	  '█', '█', '░', '░', '░', '█', '█', '█', '█', '░',
	  '░', '█', '░', '░', '░', '░', '░', '░', '█', '█',
	  '█', '█', '█', '█', '█', '░', '░', '█', '░', '░',
	  '█', '█', '█', '█', '█', '░', '█', '█', '░', '░',
	  '░', '█', '░', '█', '█', '░', '░', '█', '█', '░'
	],
	[
	  '█', '░', '█', '█', '█', '░', '█', '█', '░', '░',
	  '░', '░', '█', '█', '░', '█', '█', '█', '█', '░',
	  '█', '░', '░', '█', '█', '░', '█', '█', '█', '█',
	  '█', '█', '░', '░', '█', '░', '░', '░', '█', '░',
	  '█', '█', '█', '░', '█', '░', '█', '░', '░', '█',
	  '█', '░', '█', '█', '░', '░', '█', '█', '█', '░',
	  '█', '█', '░', '█', '█', '░', '░', '█', '█', '░',
	  '█', '░', '░', '░', '█', '░', '░', '█', '░', '░'
	],
	[
	  '░', '█', '█', '█', '░', '░', '█', '░', '░', '░',
	  '░', '█', '█', '░', '█', '█', '█', '█', '█', '░',
	  '░', '█', '░', '░', '█', '░', '░', '░', '█', '░',
	  '█', '█', '░', '░', '█', '░', '█', '░', '█', '░',
	  '░', '█', '█', '█', '░', '░', '░', '░', '█', '█',
	  '░', '░', '█', '░', '░', '░', '█', '░', '█', '█',
	  '█', '█', '█', '░', '█', '░', '█', '█', '█', '█',
	  '█', '█', '░', '░', '░', '░', '█', '█', '█', '░'
	],
	[
	  '█', '█', '░', '░', '░', '░', '█', '█', '█', '░',
	  '░', '░', '░', '░', '█', '█', '░', '█', '░', '█',
	  '░', '█', '█', '█', '░', '░', '░', '█', '░', '█',
	  '█', '░', '░', '░', '░', '░', '░', '░', '█', '░',
	  '░', '░', '░', '░', '░', '░', '░', '█', '█', '░',
	  '░', '░', '░', '░', '░', '░', '█', '░', '█', '█',
	  '░', '█', '█', '█', '░', '░', '█', '█', '░', '░',
	  '█', '█', '█', '░', '░', '█', '░', '█', '░', '█'
	],
	[
	  '░', '░', '█', '░', '█', '░', '░', '█', '░', '█',
	  '█', '█', '░', '░', '░', '░', '█', '█', '░', '░',
	  '░', '░', '░', '░', '░', '█', '█', '█', '█', '░',
	  '█', '░', '█', '░', '░', '█', '█', '░', '█', '░',
	  '░', '░', '█', '█', '█', '█', '░', '░', '░', '░',
	  '█', '░', '░', '░', '░', '█', '░', '█', '█', '░',
	  '█', '█', '░', '█', '█', '░', '█', '░', '█', '░',
	  '░', '█', '░', '█', '█', '█', '█', '░', '█', '░'
	],
	[
	  '░', '░', '░', '░', '░', '░', '░', '░', '░', '█',
	  '█', '░', '░', '█', '░', '░', '░', '█', '░', '█',
	  '░', '█', '░', '█', '█', '░', '░', '░', '█', '█',
	  '█', '░', '░', '█', '█', '░', '█', '░', '█', '█',
	  '░', '░', '█', '░', '█', '█', '░', '█', '█', '░',
	  '█', '░', '█', '█', '░', '░', '█', '█', '█', '░',
	  '█', '░', '█', '█', '█', '█', '█', '░', '░', '█',
	  '█', '█', '░', '░', '░', '░', '█', '█', '░', '█'
	],
	[
	  '█', '█', '█', '█', '░', '█', '░', '░', '░', '░',
	  '█', '█', '░', '░', '█', '█', '░', '█', '░', '█',
	  '░', '█', '░', '░', '█', '░', '░', '█', '░', '░',
	  '░', '░', '█', '░', '█', '█', '█', '█', '░', '█',
	  '█', '█', '█', '█', '█', '░', '█', '█', '░', '░',
	  '░', '█', '░', '█', '░', '█', '█', '█', '░', '█',
	  '█', '█', '█', '░', '█', '█', '░', '░', '░', '░',
	  '░', '░', '░', '░', '░', '█', '░', '░', '█', '░'
	],
	[
	  '░', '█', '░', '█', '░', '░', '░', '█', '█', '█',
	  '░', '░', '░', '░', '█', '░', '█', '█', '█', '░',
	  '█', '█', '░', '░', '█', '█', '█', '░', '█', '█',
	  '█', '░', '█', '░', '█', '█', '░', '░', '█', '░',
	  '█', '░', '█', '░', '░', '░', '█', '░', '█', '█',
	  '░', '░', '░', '░', '░', '█', '█', '░', '█', '░',
	  '░', '█', '█', '█', '░', '█', '█', '░', '░', '█',
	  '█', '░', '█', '░', '░', '█', '░', '░', '█', '█'
	],
	[
	  '░', '░', '░', '█', '░', '█', '█', '█', '█', '█',
	  '░', '░', '░', '░', '█', '░', '░', '░', '█', '█',
	  '█', '░', '█', '░', '░', '░', '░', '░', '█', '█',
	  '░', '█', '░', '░', '█', '█', '░', '█', '█', '░',
	  '█', '░', '░', '█', '█', '░', '█', '█', '█', '█',
	  '█', '█', '█', '░', '█', '█', '█', '█', '█', '█',
	  '█', '█', '█', '░', '░', '█', '░', '░', '░', '░',
	  '░', '█', '█', '█', '░', '█', '█', '█', '█', '█'
	],
	[
	  '░', '░', '░', '░', '█', '░', '█', '░', '█', '█',
	  '█', '█', '░', '█', '█', '░', '░', '░', '█', '░',
	  '█', '█', '░', '░', '░', '█', '█', '░', '░', '░',
	  '█', '░', '░', '█', '░', '░', '░', '░', '█', '█',
	  '░', '░', '░', '█', '█', '░', '░', '█', '█', '█',
	  '█', '░', '█', '░', '░', '█', '█', '░', '░', '█',
	  '█', '█', '░', '░', '░', '█', '░', '░', '█', '█',
	  '█', '█', '█', '░', '█', '█', '█', '░', '░', '░'
	]
   ];

var board = new Board(gameArray, "░", "█", 10);
printStartup(2000).then(() => {
	console.clear();
	board.runGame();
});