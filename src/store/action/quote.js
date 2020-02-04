import Immutable from 'immutable';

import actions from '../constant';
import ui from './ui';
import {GET,POST} from '../../utils/api';
import config from '../../config/constants';
import changeData from '../../config/data';

const getHindiQuotes = page => {
  return (dispatch, getState) => {
    if (page === 1) {
      dispatch(ui.loading(true));
      dispatch({
        type: actions.END_QUOTES,
        payload: Immutable.fromJS(false)
      });
    }
    GET(`${config.API_URL}/hindi-quotes?page=${page}`)
      .then(({success, response}) => {
        if (response.data !== []) {
          if (page > response.meta.last_page) {
            dispatch({
              type: actions.END_QUOTES,
              payload: Immutable.fromJS(true)
            });
          } else {
            let quotes = null;
            if (page > 1) {
              quotes = getState()
                .quote.get('hindiQuotes')
                .toJS();
              quotes.push(...response.data);
            } else {
              quotes = response.data;
            }
            dispatch({
              type: actions.GET_HINDI_QUOTES,
              payload: Immutable.fromJS(quotes),
            });
          }
          
          if (page === 1) {
            dispatch(ui.loading(false));
          }
        }
      })
      .catch(e => console.log(e));
  };
};

const getGujratiQuotes = page => {
  return (dispatch, getState) => {
    if (page === 1) {
      dispatch(ui.loading(true));
      dispatch({
        type: actions.END_QUOTES,
        payload: Immutable.fromJS(false)
      });
    }
    GET(`${config.API_URL}/gujarati-quotes?page=${page}`)
      .then(({success, response}) => {
        if (page > response.meta.last_page) {
          dispatch({
            type: actions.END_QUOTES,
            payload: Immutable.fromJS(true)
          });
        } else {
          let quotes = null;
          if (page > 1) {
            quotes = getState()
              .quote.get('gujratiQuotes')
              .toJS();
            quotes.push(...response.data);
          } else {
            quotes = response.data;
          }
          dispatch({
            type: actions.GET_GUJRATI_QUOTES,
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
    const url =
      type == 'Hindi'
        ? `${config.API_URL}/hindi-quotes/share`
        : `${config.API_URL}/gujarati-quotes/share`;
    const data =
      type == 'Hindi'
        ? getState().quote.get('hindiQuotes')
        : getState().quote.get('gujratiQuotes');
    const action =
      type == 'Hindi' ? actions.GET_HINDI_QUOTES : actions.GET_GUJRATI_QUOTES;
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
    const url =
      type == 'Hindi'
        ? `${config.API_URL}/hindi-quotes/like`
        : `${config.API_URL}/gujarati-quotes/like`;
    const data =
      type == 'Hindi'
        ? getState().quote.get('hindiQuotes')
        : getState().quote.get('gujratiQuotes');
    const action =
      type == 'Hindi' ? actions.GET_HINDI_QUOTES : actions.GET_GUJRATI_QUOTES;
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
  getHindiQuotes,
  getGujratiQuotes,
  addShare,
  addLike,
};
