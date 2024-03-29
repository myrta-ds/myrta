export const markPosition = (start: number | null, end: number | null, pattern: string = 'date'): any => {
  if (start) {
    if (start === 1) {
      return {start: 0, end: 2}
    } else if (start === 4) {
      return {start: 3, end: 5}
    } else if (start >= 7 && start <= 9) {
      return {start: 6, end: 10}
    } else if (start === 12) {
      return {start: 11, end: 13}
    } else if (start === 15) {
      return {start: 14, end: 16}
    }
    else {
      return {start, end}
    }
  }
}
