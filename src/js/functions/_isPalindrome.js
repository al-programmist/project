/**
 * Проверить, является ли строка палиндромом:
 * @param string
 * @returns {boolean}
 */
export const isPalindrome = (string) => (string === string.split("").reverse().join(""));
