#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const fn = require('detect-newline');

const cli = meow(`
	Usage
	  $ detect-newline <string>
	  $ cat unicorn.txt | detect-newline

	Example
	  $ detect-newline "$(printf 'Unicorns\\nRainbows')"
	  \n
`);

const input = cli.input[0];

function init(data) {
	process.stdout.write(fn(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a string');
	process.exit(1);
}

(async () => {
	if (input) {
		init(input);
	} else {
		init(await getStdin());
	}
})();
