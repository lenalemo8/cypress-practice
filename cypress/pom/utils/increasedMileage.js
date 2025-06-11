export function incrementFieldValueString(strValue) {
  const number = parseInt(strValue, 10);
  if (isNaN(number)) {
    throw new Error(`Невірне числове значення: "${strValue}"`);
  }
  return (number + 1).toString();
}
