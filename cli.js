#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import {detectNewlineGraceful} from 'detect-newline';

const cli = meow(`
	Usage
	  $ detect-newline <string>
	  $ cat unicorn.txt | detect-newline

	Example
	  $ detect-newline "$(printf 'Unicorns\\nRainbows')"
	  \n
`, {
	importMeta: import.meta,
});

const input = cli.input[0];

function init(data) {
	process.stdout.write(detectNewlineGraceful(data));
}

(async () => {
	if (!input && process.stdin.isTTY) {
		console.error('Specify a string');
		process.exitCode = 1;
	}

	if (input) {
		init(input);
	} else {
		init(await getStdin());
	}
})();
