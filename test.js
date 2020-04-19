import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is((await execa('./cli.js', ['foo\nbar'], {stripFinalNewline: false})).stdout, '\n');
});

test('stdin', async t => {
	t.is((await execa.shell('echo \'foo\nbar\' | ./cli.js', {stripFinalNewline: false})).stdout, '\n');
});
