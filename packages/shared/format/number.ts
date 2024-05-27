export function formatNumber(locale: string, number: number) {
  return new Intl.NumberFormat(locale).format(number);
}
