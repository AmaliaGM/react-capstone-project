export const GET_ARTWORK = 'react-capstone-project/api/GET_ARTWORK';

const initialState = [{
  detail: 'Art Piece',
  id: 'lskfjskls',
}];

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTWORK:
      return action.arr;
    default:
      return state;
  }
};

export default artReducer;
