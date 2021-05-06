/**
 * Returns the next event of the input iterator.
 *
 * @param {Iterator} iterator - The input iterator.
 * @returns {{value: any, done?: boolean}}
 */
const _next = (iterator) => iterator.next();
export default _next;
