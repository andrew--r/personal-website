const formatter = new Intl.DateTimeFormat('ru', {
  month: '2-digit',
  day: '2-digit',
});

function formatShortDate(date) {
  return formatter.format(date);
}

module.exports = { formatShortDate };
