import * as types from '../actions/types';

const initialState = {
repoData:[],
loading:false,
error:null
}

export default (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  if (action.type === types.GET_ALL_REPOS_REQUEST) {
    newState.loading = true;
  }
 
  if (action.type === types.GET_ALL_REPOS_SUCCESS) {
    newState.loading = false;
    newState.repoData = action.repos;
  }

  if(action.type === types.GET_ALL_REPOS_ERROR) {
    newState.loading = false;
    newState.error = action.error;
  }
  return newState
}
