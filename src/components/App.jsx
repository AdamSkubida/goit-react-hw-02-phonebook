import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
  };

  addContact = (newName, newPhone) => {
    const exist = this.state.contacts.find(contact => contact.name === newName);
    if (!exist) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name: newName,
            id: nanoid(),
            phone: newPhone,
          },
        ],
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
