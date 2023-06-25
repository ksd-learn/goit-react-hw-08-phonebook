import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks';
import { UserMenu } from '../userMenu/UserMenu';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            {isLoggedIn && (
                <>
                    <NavLink to='contacts'>Contacts</NavLink>
                    <UserMenu />
                </>
            )}
            {!isLoggedIn && (
                <>
                    <NavLink to='register'>Register</NavLink>
                    <NavLink to='login'>Login</NavLink>
                </>
            )}
        </nav>
    )
}