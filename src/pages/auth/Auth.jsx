import styles from './Auth.module.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthInput } from './AuthInput.jsx'
import { AuthCheckbox } from './AuthCheckbox.jsx'
import Button from '../../components/ui/buttons/button/Button.jsx'
import { isValidEmail, isValidPassword, passwordsMatch} from '../../utils/validation'
import { registerUser, loginUser } from '../../api/authApi.js'
import { AuthContext } from '../../context/AuthContext'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  // field errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatError, setRepeatError] = useState('');

  // global error
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && window.location.pathname === '/auth') {
      navigate('/profile');
    }
  }, []);

  // VALIDATION
  const validate = () => {
    let valid = true;

    setEmailError('');
    setPasswordError('');
    setRepeatError('');
    setError('');

    if (!isValidEmail(email)) {
      setEmailError('Invalid email');
      valid = false;
    }

    if (!isValidPassword(password)) {
      setPasswordError('Password must be stronger');
      valid = false;
    }

    if (!isLoginMode && !passwordsMatch(password, repeatPassword)) {
      setRepeatError('Passwords do not match');
      valid = false;
    }

    if (!isLoginMode && !agree) {
      setError('You must accept terms');
      valid = false;
    }

    return valid;
  };

  // LOGIN
  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);
    setError('');

    try {
      const response = await loginUser(email, password);
      const { token, user } = response.data;

      login(token, user);
      navigate('/');
    } 
    catch (err) {
      setError('Invalid email or password');
    } 
    finally {
      setLoading(false);
    }
  };

  // REGISTER 
  const handleRegister = async () => {
    if (!validate()) return;

    setLoading(true);
    setError('');

    try {
      await registerUser(email, password);

      // показываем окно успеха
      setRegistered(true);
    } 
    catch (err) {
      setError('Registration failed. Try again.');
    } 
    finally {
      setLoading(false);
    }
  };

  // AUTO LOGIN AFTER REGISTER 
  const handleAutoLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(email, password);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      login(token, user);
      navigate('/profile');
    } 
    catch (err) {
      setError('Login failed');
    } 
    finally {
      setLoading(false);
    }
  };

  return (
  <>
    {/* SUCCESS MODAL */}
    {registered && (
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <h2>Account created! 🎉</h2>
          <p>An email has been sent to you.</p>

          <Button
            title="Log in"
            variant="primary"
            size="xlarge"
            onClick={handleAutoLogin}
          />
        </div>
      </div>
    )}

    {/* FORM — скрываем при registered */}
    {!registered && (
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
              error={emailError}
            />

            <AuthInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />

            {!isLoginMode && (
              <>
                <AuthInput
                  label="Repeat password"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  error={repeatError}
                />

                <AuthCheckbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />

                {error && (
                  <p className={styles.agreeError}>{error}</p>
                )}
              </>
            )}

            <Button
              title={isLoginMode ? 'Sign in' : 'Sign up'}
              variant="primary"
              size="extraLarge"
              disabled={loading}
              onClick={isLoginMode ? handleLogin : handleRegister}
            />

            <p
              className={styles.switch}
              onClick={() => {
                setIsLoginMode(!isLoginMode)
                setRegistered(false)
              }}
            >
              {isLoginMode
                ? "Don't have an account? Create one"
                : 'Already have an account? Sign in'}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
)
};

export default Auth;