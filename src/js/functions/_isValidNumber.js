/**
 * Проверить, является ли строка валидным числом:
 * @param string
 * @returns {boolean}
 */
export const isValidNumber = (string) => !isNaN(parseFloat(string));
