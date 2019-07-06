import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';
import walksData from '../../helpers/data/walksData';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  getEmployees = () => {
    employeesData.getEmployees(firebase.auth().currentUser.uid)
      .then(employees => this.setState({ employees }))
      .catch(error => console.error('could not get employees', error));
  }

  getWalks = () => {
    walksData.getWalks(firebase.auth().currentUser.uid)
      .then(walks => this.setState({ walks }))
      .catch(error => console.error('could not get walks', error));
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(error => console.error('could not get dogs', error));
    this.getEmployees();
    this.getWalks();
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
