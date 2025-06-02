//Name

export function generateName() {
  const names = ["John", "Helen", "Alice", "Max", "Olivia", "Liam", "Emma"];
  return names[Math.floor(Math.random() * names.length)];
}

//Last name

export function generateLastName() {
  const namesLast = ["Smith", "Johnson", "Brown", "Williams", "Taylor"];
  return namesLast[Math.floor(Math.random() * namesLast.length)];
}

//Email

export function generateEmail(name) {
  const domains = ["example.com", "testmail.com", "myapp.dev"];
  const randomNum = Math.floor(Math.random() * 1000);
  return `${name.toLowerCase()}${randomNum}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

//Strong Password

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
};

export function fillValidRegistrationForm() {
  const firstName = generateName();
  const lastName = generateLastName();
  const email = generateEmail(firstName);
  const password = generateStrongPassword();

  return { firstName, lastName, email, password };
}

