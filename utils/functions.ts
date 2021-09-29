export function formatPhoneNumber(phoneNumber: string = "") {
  return `+84${phoneNumber.replace(/^0+/, "")}`;
}

export function formatCurrency(price: number = 0) {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export const checkActive = (value: string, pathname: string) => {
  return new RegExp(value).test(pathname);
};
