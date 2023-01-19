import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section, Title } from './App.styled';

export const App = () => {
  return (
    <>
      <Section bg="#4165f5">
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>

      <Section bg="#4165f5">
        <Title as="h2">Contacts</Title>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
