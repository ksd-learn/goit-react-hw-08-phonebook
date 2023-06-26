import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks';
import { UserMenu } from '../userMenu/UserMenu';
import css from './Navigation.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.navigation}>
            <NavLink to='/' className={css.navigationRight}>Home</NavLink>
            {isLoggedIn && (
                <div className={css.navigationLink}>
                    <NavLink to='contacts' className={css.navigationRight}>Contacts</NavLink>
                    <UserMenu />
                </div>
            )}
            {!isLoggedIn && (
                <div className={css.navigationLink}>
                    <NavLink to='register' className={css.navigationRight}>Register</NavLink>
                    <NavLink to='login'>Login</NavLink>
                </div>
            )}
        </nav>
    )
}