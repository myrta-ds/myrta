export const toDate = (date: any, formatDate: string, formatTime: string) => {
  if (date.slice(-1) === 'Z') {
    return new Date(date)
  }

  const normalized = date.replace(/[^a-zA-Z0-9]/g, '-');
  const normalizedFormatDate = formatDate.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  const replacedFormatTime = formatTime.toLowerCase().replace(/mm/gi, 'ii');
  const normalizedFormatTime = replacedFormatTime.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  const normalizedFormat = `${normalizedFormatDate}-${normalizedFormatTime}`

  const formatItems = normalizedFormat.split('-');
  const dateItems = normalized.split('-');

  const monthIndex    = formatItems.indexOf('mm');
  const dayIndex      = formatItems.indexOf('dd');
  const yearIndex     = formatItems.indexOf('yyyy');
  const hourIndex     = formatItems.indexOf('hh');
  const minutesIndex  = formatItems.indexOf('ii');
  const secondsIndex  = formatItems.indexOf('ss');

  const today = new Date();

  const year  = yearIndex > -1  ? dateItems[yearIndex]    : today.getFullYear();
  const month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
  const day   = dayIndex > -1   ? dateItems[dayIndex]     : today.getDate();

  const hour    = hourIndex > -1 && dateItems[hourIndex] ? dateItems[hourIndex] : 0;
  const minute  = minutesIndex > -1 && dateItems[minutesIndex] ? dateItems[minutesIndex] : 0;
  const second  = secondsIndex > -1 && dateItems[secondsIndex] ? dateItems[secondsIndex] : 0;

  return new Date(year,month,day,hour,minute,second);
}

export const sliceDate = (date: any, formatDate: string, formatTime: string) => {
  const normalized = date.replace(/[^a-zA-Z0-9]/g, '-');
  const normalizedFormatDate = formatDate.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  const replacedFormatTime = formatTime.toLowerCase().replace(/mm/gi, 'ii');
  const normalizedFormatTime = replacedFormatTime.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  const normalizedFormat = `${normalizedFormatDate}-${normalizedFormatTime}`

  const formatItems = normalizedFormat.split('-');
  const dateItems = normalized.split('-');

  const monthIndex    = formatItems.indexOf('mm');
  const dayIndex      = formatItems.indexOf('dd');
  const yearIndex     = formatItems.indexOf('yyyy');
  const hourIndex     = formatItems.indexOf('hh');
  const minutesIndex  = formatItems.indexOf('ii');
  const secondsIndex  = formatItems.indexOf('ss');

  const today = new Date();

  const year  = yearIndex > -1  ? dateItems[yearIndex]    : today.getFullYear();
  const month = monthIndex > -1 ? dateItems[monthIndex] : today.getMonth();
  const day   = dayIndex > -1   ? dateItems[dayIndex]     : today.getDate();

  const hour    = hourIndex > -1 && dateItems[hourIndex] ? dateItems[hourIndex] : null;
  const minute  = minutesIndex > -1 && dateItems[minutesIndex] ? dateItems[minutesIndex] : null;
  const second  = secondsIndex > -1 && dateItems[secondsIndex] ? dateItems[secondsIndex] : null;

  const formatMonth = month > 0 ? month : null

  return {year, month: formatMonth, day, hour, minute, second}
}
