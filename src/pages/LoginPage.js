import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations/operationsAuth';
import css from './RegisterPage.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(
      {
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
        <>
            <form className={css.addForm} onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label}>
                  <p>Email</p>
                  <input type="email" name="email" />
                </label>
                <label className={css.label}>
                  <p>Password</p>
                  <input type="password" name="password" />
                </label>
                <button className={css.btn} type="submit">Log In</button>
            </form>
        </>
    )
}