import React, { Component } from 'react';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';

export default class Table extends Component {
  render() {
    const { employeeData, deleteEmployee } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody
          employeeData={employeeData}
          deleteEmployee={deleteEmployee}
        />
      </table>
    );
  }
}
