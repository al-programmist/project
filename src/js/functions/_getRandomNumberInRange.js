/**
 * Сгенерировать случайное число от 1 до number:
 * @param number
 * @returns {number}
 */
export const getRandomNumberInRange = number => Math.floor(Math.random() * number) + 1;
