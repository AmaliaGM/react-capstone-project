import axios from 'axios';

const input = () => async (dispatch) => {
  const artWork = await axios.get('https://api.artic.edu/api/v1/artworks/search?q=monet', {
    headers: {
      'x-api-key': '',
    },
  });
  const arr = [];
  console.log(artWork);
  arr.push(artWork.data.data);
  console.log(arr); 
  artWork.data.data.map((element) => arr.push({
    title: element.title,
    image: element.thumbnail.alt_text,
    images: element.thumbnail.img_id,
    id: element.id,
  }));

  dispatch({
    type: 'react-capstone-project/api/GET_ARTWORK',
    arr,
  });
  // return arr;
};

export default input;
