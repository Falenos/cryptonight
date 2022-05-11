export function numberWithCommas(x: number | string): string {
  let y = x as string;
  if (typeof x === 'number') y = x.toString();
  return y.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}