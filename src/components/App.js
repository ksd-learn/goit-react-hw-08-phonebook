import { Routes, Route} from "react-router-dom";
import { Loyaut } from './Loyaut';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';
//import css from './App.module.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='contacts' element={<ContactsPage />} />
        </Route>    
      </Routes>


{/*       <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm  />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div> */}



    </>
   
  );
}
