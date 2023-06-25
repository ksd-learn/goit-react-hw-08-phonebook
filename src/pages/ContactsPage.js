
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';

export const ContactsPage = () => {
    return (
        <div >
            <h1>Phonebook</h1>
            <ContactForm  />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
      </div>
        
    )
}