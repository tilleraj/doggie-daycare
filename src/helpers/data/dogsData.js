import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((response) => {
      const dogs = [];
      Object.keys(response.data).forEach((fbKey) => {
        response.data[fbKey].id = fbKey;
        dogs.push(response.data[fbKey]);
      });
      console.error('dogs from dogsData', dogs);
      resolve(dogs);
    })
    .catch(error => reject(error));
});

export default { getDogs };
