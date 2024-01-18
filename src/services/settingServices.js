import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40257140-9557121816e63e43a77ed3f75',
  },
});

export { instance };
