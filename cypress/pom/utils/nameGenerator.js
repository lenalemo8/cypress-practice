export function generateName() {
  const names = ['John', 'Helen', 'Alice', 'Max', 'Olivia', 'Liam', 'Emma'];
  return names[Math.floor(Math.random() * names.length)];
}

export function generateLastName() {
  const namesLast = ['Smith', 'Johnson', 'Brown', 'Williams', 'Taylor'];
  return namesLast[Math.floor(Math.random() * namesLast.length)];
}
