import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import airPullutionReducer from './airPullutionReducer';


const store = configureStore({
  reducer: {
    airPollutionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
