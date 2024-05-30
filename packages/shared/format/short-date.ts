export function formatShortDate(locale: string, date: Date): string {
  return new Intl.DateTimeFormat(locale, {
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
