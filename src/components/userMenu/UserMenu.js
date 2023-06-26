import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations/operationsAuth';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.user}>
            <p className={css.userEmail}>{user.email}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}