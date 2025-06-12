export function incrementFieldValueString(strValue) {
  const number = parseInt(strValue, 10);
  if (isNaN(number)) {
    throw new Error(`Invalid numeric value: "${strValue}"`);
  }
  return (number + 1).toString();
}
