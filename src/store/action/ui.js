import actions from '../constant'

const loading = val => {
  return {
    type: actions.LOADING,
    payload: val
  }
}

export default {
  loading
}
