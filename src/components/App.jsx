import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (newContact, newNumber) => {
    const exist = this.state.contacts.find(
      contact => contact.name === newContact
    );

    if (!exist) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name: newContact,
            id: nanoid(),
            number: newNumber,
          },
        ],
      }));
      Notify.success(`Contact was added!`);
    } else {
      Notify.failure(`Contact exist`);
    }
    console.log(this.state);
  };

  addFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
    const contact = this.state.contacts.find(item => item.id === id);
    Notify.failure(`${contact.name} has been deleted`);
  };

  render() {
    return (
      <div>
        <ContactForm
          onAdd={(name, number) => {
            this.addContact(name, number);
          }}
        />
        <Filter onFilter={filter => this.addFilter(filter)} />
        <ContactList
          contactItems={this.state.contacts}
          filter={this.state.filter}
          deleteItem={id => this.deleteContact(id)}
        />
      </div>
    );
  }
}
