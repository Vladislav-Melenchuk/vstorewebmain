import styles from './Auth.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthInput } from './AuthInput.jsx'
import { AuthCheckbox } from './AuthCheckbox.jsx'
import Button from '../../components/ui/buttons/button/Button.jsx'

import { isValidEmail, isValidPassword, passwordsMatch } from '../../utils/validation'
import { registerUser, loginUser } from '../../api/authApi.js'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Если уже есть токен — сразу в профиль
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && window.location.pathname === '/auth') {
      navigate('/profile');
    }
  }, []);

  const emailValid = isValidEmail(email)
  const passwordValid = isValidPassword(password)
  const passwordsEqual = passwordsMatch(password, repeatPassword)

  const formValid =
    emailValid &&
    passwordValid &&
    (isLoginMode || passwordsEqual) &&
    (isLoginMode || agree);

  const { login } = useContext(AuthContext);

  // LOGIN
  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(email, password);
      const { token, user } = response.data;
      login(token, user);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  }

  // REGISTER
  const handleRegister = async () => {
    if (!formValid) return;

    setLoading(true);
    setError('');

    try {
      await registerUser(email, password);

      const loginResponse = await loginUser(email, password);
      const { token, user } = loginResponse.data;
      // localStorage.setItem('token', loginResponse.data.token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/profile');
    } catch (err) {
      setError('Registration error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {isLoginMode ? 'Sign in' : 'Create account'}
        </h2>

        <div className={styles.authBox}>
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isLoginMode && (
            <>
              <AuthInput
                label="Repeat password"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />

              <AuthCheckbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            </>
          )}

          <Button
            title={isLoginMode ? 'Sign in' : 'Sign up'}
            variant="primary" size='extraLarge'
            disabled={!formValid || loading}
            onClick={isLoginMode ? handleLogin : handleRegister}
          />

          {error && <p className={styles.error}>{error}</p>}

          <p
            className={styles.switch}
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode
              ? "Don't have an account? Create one"
              : 'Already have an account? Sign in'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth;