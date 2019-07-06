import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((response) => {
      const employees = [];
      Object.keys(response.data).forEach((fbKey) => {
        response.data[fbKey].id = fbKey;
        employees.push(response.data[fbKey]);
      });
      console.error('employees from employeesData', employees);
      resolve(employees);
    })
    .catch(error => reject(error));
});

export default { getEmployees };
