import React, { Component } from 'react';
import Table from './components/Table';
import Form from './components/Form';
export default class App extends Component {
  state = {
    employee: []
  };

  deleteEmployee = index => {
    const { employee } = this.state;

    this.setState({
      employee: employee.filter((person, i) => {
        return i !== index;
      })
    });
  };

  handleSummit = employee => {
    this.setState({ employee: [...this.state.employee, employee] });
  };

  render() {
    const { employee } = this.state;
    console.log(this.props);

    return (
      <div>
        <Table employeeData={employee} deleteEmployee={this.deleteEmployee} />
        <Form handleSummit={this.handleSummit} />
      </div>
    );
  }
}
