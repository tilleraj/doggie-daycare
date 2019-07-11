import React from 'react';

import PropTypes from 'prop-types';
import Walk from '../Walk/Walk';
import walkShape from '../../helpers/propz/walkShape';

import './WalkContainer.scss';

class WalkContainer extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  smashWalks = (walks, dogs, employees) => {
    const smashedWalks = walks;
    smashedWalks.map((walk) => {
      const newWalk = walk;
      const matchingDog = dogs.find(dog => dog.id === walk.dogId);
      newWalk.dogName = matchingDog.name;
      const matchingEmployee = employees.find(employee => employee.id === walk.employeeId);
      newWalk.employeeName = matchingEmployee.name;
      return newWalk;
    });
    return smashedWalks;
  }

  render() {
    const { walks } = this.props;
    const { dogs } = this.props;
    const { employees } = this.props;

    const newWalks = this.smashWalks(walks, dogs, employees);

    const makeWalks = newWalks.map(walk => (
      <Walk key={walk.id} walk={walk} />
    ));

    return (
      <div className="container">
        <div className="row">
          {makeWalks}
        </div>
      </div>
    );
  }
}

export default WalkContainer;
