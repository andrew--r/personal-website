const formatter = new Intl.DateTimeFormat('ru', {
  month: '2-digit',
  day: '2-digit',
});

export function formatShortDate(date) {
  return formatter.format(date);
}
