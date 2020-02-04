import Immutable from 'immutable';

import actions from '../constant';
import ui from './ui';
import {GET,POST} from '../../utils/api';
import config from '../../config/constants';
import {changeData, getData} from '../../config/data';

const getQuotes = (page,type) => {
  return (dispatch, getState) => {
    const {data, action} = getData(getState().quote, type)
    const url =
      type == 'Hindi'
        ? `${config.API_URL}/hindi-quotes?page=${page}`
        : `${config.API_URL}/gujarati-quotes?page=${page}`;
  if (page === 1) {
      dispatch(ui.loading(true));
      dispatch({
        type: actions.END_QUOTES,
        payload: Immutable.fromJS(false)
      });
    }
    GET(url)
      .then(({success, response}) => {
        if (page > response.meta.last_page) {
          dispatch({
            type: actions.END_QUOTES,
            payload: Immutable.fromJS(true)
          });
        } else {
          let quotes = null;
          if (page > 1) {
            quotes = data.toJS();
            quotes.push(...response.data);
          } else {
            quotes = response.data;
          }
          dispatch({
            type: action,
            payload: Immutable.fromJS(quotes),
          });
        }
        if (page === 1) {
          dispatch(ui.loading(false));
        }
      })
      .catch(e => console.log(e));
  };
};

const addShare = (id, type) => {
  return (dispatch, getState) => {
    const {data, action} = getData(getState().quote, type)
    const url =
      type == 'Hindi'
        ? `${config.API_URL}/hindi-quotes/share`
        : `${config.API_URL}/gujarati-quotes/share`;
      POST(url, {id: id}, null, null).then(({success, response}) => {
      const newData = changeData(data, response.data.id, Immutable.fromJS(response.data));
      if (success) {
          dispatch({
            type: action,
            payload: newData,
          });
        }
    });
  };
};
const addLike = (id, type) => {
  return (dispatch, getState) => {
    const {data, action} = getData(getState().quote, type)
    const url =
      type == 'Hindi'
        ? `${config.API_URL}/hindi-quotes/like`
        : `${config.API_URL}/gujarati-quotes/like`;
    const token = getState().user.get('info').toJS().token;
    POST(url, {id: id}, token, null).then(({success, response}) => {
      const newData = changeData(data, response.data.id, Immutable.fromJS(response.data));
       if (success) {
        dispatch({
          type: action,
          payload: newData,
        });
      }
    });
  };
};


export default {
  getQuotes,
  addShare,
  addLike,
};
