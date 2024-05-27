const formatter = new Intl.DateTimeFormat('en', {
  month: '2-digit',
  day: '2-digit',
});

export function formatShortDate(date) {
  return formatter.format(date);
}
