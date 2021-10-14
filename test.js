import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['foo\nbar'], {stripFinalNewline: false});
	t.is(stdout, '\n');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: 'foo\nbar', stripFinalNewline: false});
	t.is(stdout, '\n');
});
