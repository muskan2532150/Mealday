import { configureStore } from '@reduxjs/toolkit';
import  ContainerSliceReducer  from './Container/Containers';

export default configureStore({
  reducer: {

   container : ContainerSliceReducer,
  },
});