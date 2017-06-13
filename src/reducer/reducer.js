import * as types from '../actions/types';
import {extractPageOptions} from '../../helper/helperFunctions';

const initialState = {
repoData:[],
searchResults:[],
totalResults: 0,
activePage: null,
pages: [1,2,3,4,5,6,7,8,9,10],
nextPage: null,
prePage: null,
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

  if(action.type === types.GET_SEARCH_RESULTS_REQUEST) {
    newState.loading = true;
  }

  if(action.type === types.GET_SEARCH_RESULTS_SUCCESS) {
    const pageOptions = extractPageOptions(action.pageOptions);
    newState.loading = false;
    newState.searchResults = action.searchResults;
    newState.totalResults = action.totalCount
    
  }

  if(action.type === types.GET_SEARCH_RESULTS_ERROR) {
    newState.loading = false;
    newState.error = action.error;
  }
  return newState
}
