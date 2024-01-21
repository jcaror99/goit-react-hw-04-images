import { instance } from './settingServices';

const getMovies = (word = 'cat', page = 1) => {
  return instance
    .get('', {
      params: {
        q: word,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: '12',
      },
    })
    .then(function (response) {
      const hits = response.data.hits.map(element => ({
        id: element.id,
        webformatURL: element.webformatURL,
        largeImageURL: element.largeImageURL,
      }));

      return hits;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};

export { getMovies };
