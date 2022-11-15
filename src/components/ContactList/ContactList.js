import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from '../Contact/Contact';

import { ContactItems, ContactItem } from './ContactList.styles';

export function ContactList() {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  function filterContacts() {
    if (contacts.length !== 0) {
      const normalizeFilter = filter.toLowerCase().trim();

      const allContacts = contacts.filter(contact =>
        contact.text.name.toLowerCase().includes(normalizeFilter)
      );

      const inAlphabetContact = [
        ...allContacts.sort((firstContact, secondContact) =>
          firstContact.text.name.localeCompare(secondContact.text.name)
        ),
      ];

      return inAlphabetContact;
    }
  }
  return (
    <ContactItems>
      {!filterContacts()
        ? 'contacts missing'
        : filterContacts().map(contact => (
            <ContactItem key={contact.id}>
              <Contact contact={contact} />
            </ContactItem>
          ))}
    </ContactItems>
  );
}
