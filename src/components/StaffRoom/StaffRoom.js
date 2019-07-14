import React from 'react';
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

import Employee from '../Employee/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="col-12 col-md-6 col-xl-4">
        <h3>Staff</h3>
      <div className="row">
        {makeEmployees}
      </div>
    </div>
    );
  }
}

export default StaffRoom;
