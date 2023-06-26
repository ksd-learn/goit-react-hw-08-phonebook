import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/operationsAuth';
import css from './RegisterPage.module.css';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register(
      {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value
      })
    );
    form.reset();
  };

  return (
    <form className={css.addForm} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <p>Username</p>
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          <p>Email</p>
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
    </form>
  )
};
