export function hostFromUrl(url) {
  return new URL(url).host.replace(/^www\./g, '');
}
