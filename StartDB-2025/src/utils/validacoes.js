export function temDuplicados(arr) {
  return new Set(arr).size !== arr.length;
}
