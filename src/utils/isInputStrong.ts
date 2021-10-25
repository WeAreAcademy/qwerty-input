export function isInputStrong(password: string): boolean {
  return password.length >= 7 &&
    password.match(/[A-Z]/g) &&
    password.match(/[a-z]/g) &&
    password.match(/[!?£$%]/g)
    ? true
    : false;
}
