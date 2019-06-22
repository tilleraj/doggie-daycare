import React from 'react';

import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee d-flex col-12 col-sm-6 col-md-4">
      <div className="card mb-4 w-100">
        <img src={employee.imgUrl} className="card-img-top" alt={`${employee.name} being professional`} />
        <div className="card-body d-flex justify-content-end flex-column">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">{`Owns ${employee.dogsOwned} dog(s)`}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Employee;
