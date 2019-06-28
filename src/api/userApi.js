import axios from 'axios';
import { HOSTNAME } from '../shared/constants';

const URL = HOSTNAME + '/customer';

export function getCustomer(id) {
  return axios.get(URL, {
    params: {
      id,
    }
  })
    .catch(error => {
      console.log(error);
    })
}
