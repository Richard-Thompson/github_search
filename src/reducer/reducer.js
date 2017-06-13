import * as types from '../actions/types';
import {extractLastPage} from '../helper/helperFunctions';

const initialState = {
repoData:[],
searchResults:[],
totalResults: 0,
activePage:1,
pages: [1,2,3,4,5,6,7,8,9,10],
lastPage:null,
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
    const extractedLastPage = extractLastPage(action.lastPage);
    newState.loading = false;
    newState.searchResults = action.searchResults;
    newState.totalResults = action.totalCount;
    newState.lastPage = extractedLastPage.last
    if (action.pageNumber < 1) {
      newState.activePage = 1
    }
    else if (action.pageNumber > newState.lastPage) {
      newState.activePage = extractedLastPage.last;
    }
    else{
      newState.activePage =  action.pageNumber;
    }
  }

  if(action.type === types.GET_SEARCH_RESULTS_ERROR) {
    newState.loading = false;
    newState.error = action.error;
  }

  if(action.type === types.CHECK_DECREASE_PAGES) {
     newState.pages = newState.pages.slice();
    if(newState.activePage < newState.pages[0]) {
      
      newState.pages = [newState.pages[0]-1, ...newState.pages]
      console.log(newState.pages)
      newState.pages = newState.pages.slice(0,newState.pages.length);
    }
  }

  if(action.type === types.CHECK_INCREASE_PAGES) {
      newState.pages = newState.pages.slice();
    if(newState.activePage + 1 > newState.pages.length) {
      newState.pages = newState.pages.slice(1)
      newState.pages = newState.pages.concat(newState.activePage + 1);
    }
  }
  return newState
}
