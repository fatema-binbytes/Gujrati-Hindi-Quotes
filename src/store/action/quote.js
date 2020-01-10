import Immutable from 'immutable';

import actions from '../constant';
import ui from './ui';
import {GET} from '../../utils/api';
import config from '../../config/constants';

const getHindiQuotes = page => {
  return (dispatch, getState) => {
    if (page === 1) {
      dispatch(ui.loading(true));
    }
    GET(`${config.API_URL}/hindi-quotes?page=${page}`)
      .then(({success, response}) => {
        if(response.data != []){
            let quotes = null;
            if (page > 1) {
              quotes = getState().quote.get('hindiQuotes').toJS();
              quotes.push(...response.data);
            } else {
              quotes = response.data;
            }
            dispatch({
              type: actions.GET_HINDI_QUOTES,
              payload: Immutable.fromJS(quotes),
            });
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
    }
    GET(`${config.API_URL}/gujarati-quotes?page=${page}`)
      .then(({success, response}) => {
        console.log(response)
        if (page > response.meta.last_page) {
          dispatch({
            type: actions.END_QUOTES,
          });
        } else {
          let quotes = null;
          if (page > 1) {
            quotes = getState().quote.get('gujratiQuotes').toJS();
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

export default {
  getHindiQuotes,
  getGujratiQuotes,
};
