export const formatCurrency = (value: number) => {
  const currency = new Intl.NumberFormat("en-AR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);

  return currency;
};
