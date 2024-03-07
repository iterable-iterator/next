import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {range} from '@iterable-iterator/range';

import {StopIteration} from './_fixtures.js';

import {next} from '#module';

test('empty range - dflt', (t) => {
	t.throws(
		() => next(iter(range(0))),
		{instanceOf: StopIteration},
		'next on empty iterator throws StopIteration',
	);
});

test('empty range + dflt', (t) => {
	const dflt = {};
	t.is(
		next(iter(range(0)), dflt),
		dflt,
		'next on empty iterator with default returns default',
	);
});

test('range + dflt', (t) => {
	const it = iter(range(57, 14, -3));
	const dflt = {};

	t.is(next(it), 57);
	t.is(next(it), 54);
	t.is(next(it), 51);
	t.is(next(it, dflt), 48);
});
