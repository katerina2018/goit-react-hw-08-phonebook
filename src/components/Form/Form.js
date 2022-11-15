import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import {
  ContactForms,
  ContactInput,
  ContactLabel,
  ContactFormsButton,
} from './Form.styles';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <ContactForms onSubmit={handleSubmit}>
      <ContactLabel>
        Name:
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          autoFocus="on"
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </ContactLabel>
      <ContactFormsButton type="submit"> Add contact</ContactFormsButton>
    </ContactForms>
  );
}
