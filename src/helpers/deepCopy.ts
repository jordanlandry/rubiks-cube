export default function deepCopy(arr: any[]) {
  return JSON.parse(JSON.stringify(arr));
}
