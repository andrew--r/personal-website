const formatter = new Intl.NumberFormat('ru');

export function formatNumber(number) {
  return formatter.format(number);
}
