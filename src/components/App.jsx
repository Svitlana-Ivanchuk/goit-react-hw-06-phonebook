import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layuot';
import { Section } from './Section/Section';
import { FilterName } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <ContactForm></ContactForm>

      <Section title="Contacts">
        <FilterName></FilterName>
        <Contacts></Contacts>
      </Section>

      <GlobalStyle />
    </Layout>
  );
};
