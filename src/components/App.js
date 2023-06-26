import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { Loyaut } from './Loyaut';
import { refreshUser } from '../redux/operations/operationsAuth';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks';

import css from './App.module.css';

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Loyaut />}>
        <Route index element={<HomePage />} />
        <Route path='register' element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route path='login' element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path='contacts' element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>    
    </Routes>
  );
}
