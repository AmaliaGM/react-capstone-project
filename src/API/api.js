import axios from 'axios';

const input = () => async (dispatch) => {
  const artWork = await axios.get('https://api.artic.edu/api/v1/artworks/search?q=monet', {
    headers: {
      'x-api-key': 'application/json',
    },
  });
  const arr = [];
  console.log(artWork);
  arr.push(artWork.data.data);
  console.log(arr);
  arr.map((element) => ({
    title: element.title,
    image: element.thumbnail.lqip,
    id: element.id,
    link: element.link,
    text: element.thumbnail.alt_text,
  }));

  dispatch({
    type: 'react-capstone-project/api/GET_ARTWORK',
    arr,
  });
  return arr;
};

export default input;
