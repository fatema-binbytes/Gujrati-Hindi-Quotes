const changeData = (data, id, newValue) => {
  const index = data.findIndex(x => x.get('id') == id);
  return data.updateIn([index], value => newValue)
};

export default changeData

