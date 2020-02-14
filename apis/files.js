import axios from 'axios';

//TODO change baseURL to actual URL when app is hosted
export default axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})
