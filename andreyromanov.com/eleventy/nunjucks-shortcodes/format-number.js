const formatter = new Intl.NumberFormat('en');

function formatNumber(number) {
  return formatter.format(number);
}

module.exports = { formatNumber };
