export const validateCardNumber = (num) => {
  const clean = num.replace(/\s+/g, "");
  if (!/^\d{16}$/.test(clean)) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = clean.length - 1; i >= 0; i--) {
    let digit = parseInt(clean[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

export const validateName = (name) =>
  /^[A-Za-z\s]{2,}$/.test(name);

export const validateExpiry = (expiry) => {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;

  const [month, year] = expiry.split("/").map(Number);
  if (month < 1 || month > 12) return false;

  const now = new Date();
  const expDate = new Date(2000 + year, month);

  return expDate > now;
};

export const validateCVV = (cvv) =>
  /^\d{3,4}$/.test(cvv);