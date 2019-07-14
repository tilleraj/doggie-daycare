import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';
import walksData from '../../helpers/data/walksData';
import WalkList from '../WalkList/WalkList';

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
    const { walks } = this.state;

    return (
      <div className="Home">
        <h1>Doggie Daycare</h1>
        <div className="container">
        <div className="row">
          <DogPen dogs={dogs} />
          <StaffRoom employees={employees} />
          <WalkList walks={walks} dogs={dogs} employees={employees} />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
