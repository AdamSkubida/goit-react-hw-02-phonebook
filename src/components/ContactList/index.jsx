import { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.contactItems
          .filter(item =>
            item.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(item => (
            <li key={item.id}>
              {item.name} --- {item.number}
              <button onClick={() => this.props.deleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
