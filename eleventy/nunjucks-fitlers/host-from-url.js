function hostFromUrl(url) {
  return new URL(url).host;
}

module.exports = { hostFromUrl };
