import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AccountSettings.module.css';
import { User } from '../types';

interface AccountSettingsProps {
    setIsLoggedIn: (value: boolean) => void;
  }

  
  const AccountSettings = ({ setIsLoggedIn }: AccountSettingsProps) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userJson = localStorage.getItem('popx-user');
        if (userJson) {
            setUser(JSON.parse(userJson));
        }
    }, []);

   
  const handleLogout = () => {
    localStorage.removeItem('popx-user');
    setIsLoggedIn(false);
    navigate('/');
  }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Account Settings</h1>
                <button 
                    onClick={handleLogout}
                    className={styles.logoutButton}
                >
                    Logout
                </button>
            </div>

            <div className={styles.profile}>
                <div className={styles.userInfo}>
                    <div className={styles.photoContainer}>
                        <img 
                             src="/images/default-avatar.png"
                            alt={user.fullName} 
                            className={styles.profilePhoto} 
                        />
                        <div className={styles.photoButton}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="white" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.userName}>{user.fullName}</h3>
                        <p className={styles.userEmail}>{user.email}</p>
                    </div>
                </div>

                <p className={styles.bio}>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
        </div>
    );
};

export default AccountSettings;