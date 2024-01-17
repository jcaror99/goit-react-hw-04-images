import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

axios
  .get('', {
    params: {
      q: 'cat',
      page: '1',
      key: '40257140-9557121816e63e43a77ed3f75',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

export default instance;
