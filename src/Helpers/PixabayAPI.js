import axios from 'axios';

export default async function FetchImages(page, query) {
  const params = {
    page: 1,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: '39012417-8ecd5ac19c5f88775b27b3185',
  };
  if (query) {
    const { data } = await axios.get('https://pixabay.com/api/', {
      params: {
        ...params,
        page,
        q: query,
      },
    });
    return data.hits;
  } else {
    const { data } = await axios.get('https://pixabay.com/api/', {
      params: {
        ...params,
        page,
      },
    });
    return data.hits;
  }
}
