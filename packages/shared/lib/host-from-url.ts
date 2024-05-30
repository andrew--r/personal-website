export function hostFromUrl(url: string): string {
  return new URL(url).host.replace(/^www\./g, '');
}
