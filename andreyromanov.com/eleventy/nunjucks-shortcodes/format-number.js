const formatter = new Intl.NumberFormat('en');

export function formatNumber(number) {
  return formatter.format(number);
}
