const formatter = new Intl.NumberFormat('ru');

function formatNumber(number) {
  return formatter.format(number);
}

module.exports = { formatNumber };
