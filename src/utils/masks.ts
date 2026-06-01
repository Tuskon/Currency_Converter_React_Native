export const maskValue = (value: string): string => {
  let formatted = value.replace(',', '.');
  formatted = formatted.replace(/[^0-9.]/g, '');
  const parts = formatted.split('.');
  if (parts.length > 2) {
    formatted = parts[0] + '.' + parts.slice(1).join('');
  }
  if (formatted.includes('.')) {
    const [integer, decimal] = formatted.split('.');
    formatted = `${integer}.${decimal.slice(0, 2)}`;
  }
  return formatted;
};