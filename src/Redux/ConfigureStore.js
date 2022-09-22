import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import artReducer from './artReducer';

const store = configureStore({
  reducer: {
    artReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
