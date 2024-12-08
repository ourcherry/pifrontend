export function useStrDatetoYYYYMMDDHHSS(strDate: string): string {
  return new Date(strDate).toISOString().slice(0, 16).replace('T', ' ');
}
