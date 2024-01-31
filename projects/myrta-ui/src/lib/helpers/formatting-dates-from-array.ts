export const dateTimeFormat = (date: string, config: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat('ru', config).format(new Date(date));
};

export const formattingDateRange = (dates: string[]): string => {
  const config: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric'
  };
  let str = '';

  dates.forEach((date, idx, array) => {
    if (idx === array.length - 1) {
      config.year = 'numeric';
    }

    str += `${idx > 0 ? ' - ' : ''}${dateTimeFormat(date, config)}`;
  });

  return str;
};
