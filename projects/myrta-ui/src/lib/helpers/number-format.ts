/**
 * Функция форматирования чисел, возвращает число в формате 0,00
 * @param number число
 * @param minimumDigits
 * */
export const toNumberFormat = (number: number, minimumDigits: number = 2) => {
  return new Intl.NumberFormat('ru', {minimumFractionDigits: minimumDigits}).format(number)
}
