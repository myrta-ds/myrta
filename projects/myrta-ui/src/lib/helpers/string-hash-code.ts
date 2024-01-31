export const sHashCode = (str: string): number => {
  let hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const getHashCode = (str: string): string => {
  const localHash = sHashCode(location.pathname + location.search)
  const stringHash = sHashCode(str)
  return `${localHash}_${stringHash}`
}
