import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { selectContacts } from '../../redux/contactsSlice.js';
// import { selectNameFilter } from '../../redux/filtersSlice.js';
import css from './ContactList.module.css';

export default function ContactList() {
  const { items, loading, error } = useSelector(state => state.contacts);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const filteredContacts = contacts.filter(
  //   contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.toLowerCase().includes(filter)
  // );

  return (
    <ul className={css.contContList}>
      {items.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
