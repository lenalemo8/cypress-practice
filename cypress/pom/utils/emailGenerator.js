export function generateEmail(name) {
  const domains = ["example.com", "testmail.com", "myapp.dev"];
  const randomNum = Math.floor(Math.random() * 1000);
  return `${name.toLowerCase()}${randomNum}@${domains[Math.floor(Math.random() * domains.length)]}`;
}
