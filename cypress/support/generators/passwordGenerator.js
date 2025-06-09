export function generateStrongPassword() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const getRand = str => str[Math.floor(Math.random() * str.length)];

  let password = getRand(upper) + getRand(lower) + getRand(digits);
  for (let i = 0; i < 7; i++) {
    password += getRand(upper + lower + digits);
  }
  return password;
}
