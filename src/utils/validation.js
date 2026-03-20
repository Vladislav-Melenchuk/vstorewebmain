// перевірка email
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// перевірка пароля (мінімум 8 символов)
export const isValidPassword = (password) => {
  return password.length >= 6;
};

// перевірка співадіння паролей
export const passwordsMatch = (password, repeatPassword) => {
  return password === repeatPassword;
};