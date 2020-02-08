import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import immutableTransform from 'redux-persist-transform-immutable';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducer';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['quote','ui'],
};
const Reducer = persistReducer(persistConfig, reducers);

export const store = createStore(Reducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

