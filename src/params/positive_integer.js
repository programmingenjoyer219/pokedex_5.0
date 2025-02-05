export function match(param) {
  const regex = /^[1-9]\d*$/;
  return regex.test(param);
}
