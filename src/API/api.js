import axios from 'axios';

const input = () => async (dispatch) => {
  const artWork = await axios.get('https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=2&limit=10&indent=1', {
    headers: {
      'x-api-key': '',
    },
  });
  const arr = [];
  artWork.data.data.map((element) => arr.push({
    title: element.title,
    image: element.thombstone,
    images: element.images.web,
    id: element.id,
    description: element.wall_description,
  }));
  dispatch({
    type: 'react-capstone-project/api/GET_ARTWORK',
    arr,
  });
};

export default input;
