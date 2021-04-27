/**
 * Returns the next event of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {{value: any, done?: boolean}}
 */
export default function _next(iterator) {
	return iterator.next();
}
