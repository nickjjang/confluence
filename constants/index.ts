export type Currency = {
  country: string;
  code: string;
  rate: number;
};

export type Package = {
  name: string;
  plus: number;
};

export const countries = ["Hong Kong", "USA", "Australia"];

export const curriencies: Currency[] = [
  {
    country: "Hong Kong",
    code: "HKD",
    rate: 1,
  },
  {
    country: "USA",
    code: "USD",
    rate: 2,
  },
  {
    country: "Australia",
    code: "AUD",
    rate: 3,
  },
];

export const packages: Package[] = [
  {
    name: "Standard",
    plus: 0,
  },
  {
    name: "Safe",
    plus: 50,
  },
  {
    name: "Super Safe",
    plus: 75,
  },
];

export const calculatePremium = (
  age: number,
  country: string,
  packageName: string
) => {
  const currency = curriencies.find((currency) => currency.country === country);
  const packageItem = packages.find((item) => item.name === packageName);
  if (!currency || !packageItem || age <= 0 || age > 100) {
    return "";
  }
  const price = (10 * currency.rate * age * (packageItem.plus + 100)) / 100;
  return `${price}${currency.code}`;
};
