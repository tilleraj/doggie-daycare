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

const deleteWalk = walkId => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const postWalk = newWalk => axios.post(`${baseUrl}/walks.json`, newWalk);

const putWalk = (walkId, updateWalk) => axios.put(`${baseUrl}/walks/${walkId}.json`, updateWalk);

export default {
  getWalks,
  deleteWalk,
  postWalk,
  putWalk,
};
