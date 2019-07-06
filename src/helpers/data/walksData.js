import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((response) => {
      const walks = [];
      Object.keys(response.data).forEach((fbKey) => {
        response.data[fbKey].id = fbKey;
        walks.push(response.data[fbKey]);
      });
      resolve(walks);
    })
    .catch(error => reject(error));
});

export default { getWalks };
