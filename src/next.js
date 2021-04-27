import StopIteration from './StopIteration.js';
import _next from './_next.js';

/**
 * Returns the next value of the input iterator. If the iterator is exhausted,
 * throws a {@link StopIteration}, unless a <code>dflt</code> argument has been
 * specified, in which case the <code>dflt</code> argument is returned.
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {any} [dflt=undefined] - The default value to return in the case
 * that the input iterator is exhausted.
 * @returns {any} The next value of the input iterator.
 */
export default function next(iterator, dflt = undefined) {
	const x = _next(iterator);

	if (x.done) {
		if (dflt === undefined) {
			throw new StopIteration();
		} else {
			return dflt;
		}
	}

	return x.value;
}
