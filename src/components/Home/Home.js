import React from 'react';

import myDogs from '../../App/dogs';
import DogPen from '../DogPen/DogPen';
import myEmployees from '../../App/employees';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;

    return (
      <div className="App">
        <div>Doggie Daycare</div>
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default Home;
