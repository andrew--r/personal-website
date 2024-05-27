const formatter = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function formatDate(date) {
  return formatter.format(date);
}
