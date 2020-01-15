import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import immutableTransform from 'redux-persist-transform-immutable';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducer';

const persistConfig = {
  transform: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['quote','ui','user']
};
const Reducer = persistReducer(persistConfig, reducers);

export const store = createStore(Reducer, applyMiddleware(thunk,logger));
export const persistor = persistStore(store);

