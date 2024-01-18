import { instance } from './settingServices';

const getMovies = (word = 'cat') => {
  instance
    .get('', {
      params: {
        q: word,
        page: '1',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: '12',
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};

export { getMovies };
