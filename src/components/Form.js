import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value, 'x');

    this.setState({
      [name]: value
    });

    console.log(this.state.name, this.state.job);
  };

  summitForm = () => {
    this.props.handleSummit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type='text'
          name='job'
          value={job}
          onChange={this.handleChange}
        />
        <input type='button' value='Submit' onClick={this.summitForm} />
      </form>
    );
  }
}
