export function formatNumber(x: number | string, d = 0): string {
  let y = x as string;
  if (typeof x === 'number') y = x.toFixed(d).toString();
  return y.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function isArray(x: any): boolean {
  return Array.isArray(x);
}

export function hasItems(x: any) {
  return isArray(x) && x.length > 0 && x.some((e: any) => !!e)
}

export function getValue(x: any) {
  if (hasItems(x)) return x;
  if (!isArray(x) && !!x) return x;
  return null;
}

export function formatDate(date: string) {
  return new Date(date).toUTCString()
}

export const fetchRetry = async (url: string, options: object = {}, n = 0): Promise<any> => {
  try {
    return await fetch(url, options)
  } catch (err) {
    if (n === 1) throw err;
    return await fetchRetry(url, options, n - 1);
  }
};