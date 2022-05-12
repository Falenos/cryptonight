export function formatNumber(x: number | string, d = 6): string {
  let y = x as string;
  if (typeof x === 'number') y = x.toFixed(d).toString();
  return y.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function hasItems(x: any) {
  return Array.isArray(x) && x.length > 0
}

export function getValue(x: any) {
  if (hasItems(x)) return x;
  if (!!x) return x;
  return null;
}

export function formatDate(date: string) {
  return new Date(date).toUTCString()
}