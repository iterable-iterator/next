import test from 'ava';

import {range} from '@iterable-iterator/range';
import {next, StopIteration} from '../../src/index.js';

test('empty range - dflt', (t) => {
	t.throws(
		() => next(range(0)),
		{instanceOf: StopIteration},
		'next on empty iterator throws StopIteration',
	);
});

test('empty range + dflt', (t) => {
	const dflt = {};
	t.is(
		next(range(0), dflt),
		dflt,
		'next on empty iterator with default returns default',
	);
});

test('range + dflt', (t) => {
	const it = range(57, 14, -3);
	const dflt = {};

	t.is(next(it), 57);
	t.is(next(it), 54);
	t.is(next(it), 51);
	t.is(next(it, dflt), 48);
});
