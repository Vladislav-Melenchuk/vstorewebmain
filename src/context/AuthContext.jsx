import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const syncCart = async (token) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    for (const item of cart) {
      await fetch(`/api/cart/add/${item.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    localStorage.removeItem('cart');
  };

  // вход
  const login = async (newToken, newUser) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);

    await syncCart(newToken);
  };

  // выход
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // чтобы обновлялось при перезагрузке
  useEffect(() => {
   const storedToken = localStorage.getItem('token');
   setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};