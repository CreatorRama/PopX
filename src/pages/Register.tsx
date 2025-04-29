import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import { User } from '../types';

interface RegisterProps {
    setIsLoggedIn: (value: boolean) => void;
}

const Register = ({ setIsLoggedIn }: RegisterProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const navigate = useNavigate();

    const onSubmit = (data: User) => {
        const usersJson = localStorage.getItem('popx-users');
        let users: User[] = [];

        if (usersJson) {
            users = JSON.parse(usersJson);
        }


        const newUser = {
            ...data,
        };

        users.push(newUser);

       
        localStorage.setItem('popx-users', JSON.stringify(users));

        
        localStorage.setItem('popx-user', JSON.stringify(newUser));

       
        setIsLoggedIn(true);

        
        navigate('/account');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create your PopX account</h1>
                <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name*</label>
                    <input
                        className={styles.input}
                        placeholder="Marry Doe"
                        {...register('fullName', { 
                            required: 'Full name is required',
                            pattern: {
                                value: /^[A-Za-z]+(?: [A-Za-z]+)+$/, // At least two words separated by space
                                message: 'Please enter your full name (first and last name)'
                            }
                        })}
                    />
                    {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone number*</label>
                    <input
                        className={styles.input}
                        placeholder="Marry Doe"
                        {...register('phoneNumber', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[1-9][0-9]{9}$/,
                              message: 'Phone number must be 10 digits and not start with 0'
                            },
                            minLength: {
                              value: 10,
                              message: 'Phone number must be exactly 10 digits'
                            },
                            maxLength: {
                              value: 10,
                              message: 'Phone number must be exactly 10 digits'
                            }
                          })}
                    />
                    {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber.message}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email address*</label>
                    <input
                        className={styles.input}
                        placeholder="Marry Doe"
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
                    <label className={styles.label}>Password*</label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Marry Doe"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })}
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Company name</label>
                    <input
                        className={styles.input}
                        placeholder="Marry Doe"
                        {...register('companyName')}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Are you an Agency?*</label>
                    <div className={styles.checkboxContainer}>
                        <input
                            type="radio"
                            id="agency-yes"
                            className={styles.radioInput}
                            value="true" 
                            {...register('isAgency', { required: true })}
                        />
                        <label htmlFor="agency-yes">Yes</label>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input
                            type="radio"
                            id="agency-no"
                            className={styles.radioInput}
                            value="false"  
                            {...register('isAgency', { required: true })}
                        />
                        <label htmlFor="agency-no">No</label>
                    </div>
                    {errors.isAgency && <span className={styles.error}>Please select an option</span>}
                </div>

                <button type="submit" className={styles.submitButton}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;