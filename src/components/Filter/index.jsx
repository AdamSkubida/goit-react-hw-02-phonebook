import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handleFilterChange = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <form className={css.form}>
        <div className={css[`label-input`]}>
          <label className={css.label} htmlFor="filter">
            Find contact by name
          </label>
          <input
            type="text"
            name="filter"
            placeholder="Find contact..."
            onChange={this.handleFilterChange}
          ></input>
        </div>
      </form>
    );
  }
}
