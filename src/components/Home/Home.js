import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

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
    dogName: '',
    employeeName: '',
    walkDate: '',
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

  dogNameChange = (e) => {
    e.preventDefault();
    this.setState({ dogName: e.target.value });
  }

  employeeNameChange = (e) => {
    e.preventDefault();
    this.setState({ employeeName: e.target.value });
  }

  walkDateChange = (e) => {
    e.preventDefault();
    this.setState({ walkDate: e.target.value });
  }

  saveWalk = (e) => {
    e.preventDefault();
    if (this.state.walkDate && this.state.dogName && this.state.employeeName) {
      const { employeeName } = this.state;
      const { dogName } = this.state;
      const newWalk = {
        date: this.state.walkDate,
        dogId: this.state.dogs.find(dog => dog.name === dogName).id,
        employeeId: this.state.employees.find(employee => employee.name === employeeName).id,
      };
      walksData.postWalk(newWalk)
        .then(() => {
          this.setState({
            dogName: '',
            employeeName: '',
            walkDate: '',
          });
          this.getWalks();
        })
        .catch(error => console.error('error in the post walk', error));
    }
    e.target.closest('form').reset();
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    const { walks } = this.state;
    const dogNames = this.state.dogs.map(dog => <option key={`${dog.id}Option`}> {dog.name}</option >);
    const employeeNames = this.state.employees.map(employee => <option key={`${employee.id}Option`}>{employee.name}</option>);

    return (
      <div className="Home">
        <h1>Doggie Daycare</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 d-flex justify-content-center">
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="dogSelect" className="mr-sm-2">Dog</Label>
                  <Input type="select" name="select" id="dogSelect" onChange={this.dogNameChange}>
                    <option value="">Select</option>
                    {dogNames}
                  </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="employeeSelect" className="mr-sm-2">Employee</Label>
                  <Input type="select" name="select" id="employeeSelect" onChange={this.employeeNameChange}>
                    <option value="">Select</option>
                    {employeeNames}
                  </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="walkDate" className="mr-sm-2">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="walkDate"
                    placeholder="01/01/2001"
                    onChange={this.walkDateChange}
                  />
                </FormGroup>
                <Button onClick={this.saveWalk}>Create Walk</Button>
              </Form>
            </div>
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
