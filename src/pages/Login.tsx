import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css'; 
import { User } from '../types';

interface LoginForm {
  email: string;
  password: string;
}

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  
  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError('');
      }, 2000);
      return () => clearTimeout(timer); 
    }
  }, [loginError]);

  const onSubmit = (data: LoginForm) => {
    const usersJson = localStorage.getItem('popx-users');
    
    if (usersJson) {
      const users = JSON.parse(usersJson);
      
      const matchedUser = users.find((user:User) => 
        user.email === data.email && user.password === data.password
      );
      
      if (matchedUser) {
        localStorage.setItem('popx-user', JSON.stringify(matchedUser));
        setIsLoggedIn(true);
        navigate('/account');
        return;
      }
    }
    
    setLoginError('Invalid email or password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Signin to your PopX account</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address</label>
          <input
            className={styles.input}
            placeholder="Enter email address"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>

        {loginError && <div className={styles.formError}>{loginError}</div>}

        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;