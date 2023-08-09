// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers';

// const store = createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)));

// export type AppDispatch = typeof store.dispatch;
// export default store;

import { configureStore } from '@reduxjs/toolkit';

import adminGeneralReducer from '../features/admin.general';
import projectModalReducer from '../features/projectModal';

export const store = configureStore({ // Configuring the Store: Passing the reducers and Async Thunk Functions
  reducer: {
    adminGeneral: adminGeneralReducer,
    projectModal: projectModalReducer,
  }
});

export type AppDispatch = typeof store.dispatch; // Creating a type for dispatch
export type RootState = ReturnType<typeof store.getState>; // Creating a type for reducers
