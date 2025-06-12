import { generateName, generateLastName } from './nameGenerator';
import { generateEmail } from './emailGenerator';
import { generateStrongPassword } from './passwordGenerator';

export function fillValidRegistrationForm() {
  const firstName = generateName();
  const lastName = generateLastName();
  const email = generateEmail(firstName);
  const password = generateStrongPassword();

  return { firstName, lastName, email, password };
}
