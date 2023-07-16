/**
 * Посчитать вхождения элемента в массиве:
 * @param element
 * @param array
 * @returns {*}
 */
export const getQuanntityInArray = (element, array) => array.filter(x => x === element).length;
