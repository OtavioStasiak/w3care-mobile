import axios from 'axios';

const url = "";

const api = axios.create({
  baseURL: url,
});

export { api };