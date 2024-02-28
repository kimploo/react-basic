import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counter/counter.reducer.js';

export default configureStore({
  reducer: {
    counter,
  },
});
