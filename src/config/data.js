import actions from '../store/constant';

const changeData = (data, id, newValue) => {
  const index = data.findIndex(x => x.get('id') == id);
  return data.updateIn([index], value => newValue)
};
const getData = (states, type) => {
   const data =
    type == 'Hindi'
      ? states.get('hindiQuotes')
      : states.get('gujratiQuotes');
    const action =
      type == 'Hindi' ? actions.GET_HINDI_QUOTES : actions.GET_GUJRATI_QUOTES;
  return { data, action}
  
}
export {
  changeData,
  getData,
}
  
