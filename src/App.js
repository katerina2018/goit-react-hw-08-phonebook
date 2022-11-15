import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1 className="App">Phonebook</h1>
      <Form />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Section>
  );
}
