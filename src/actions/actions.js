import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function getAllRepos () {
  return function (dispatch) {
    dispatch(fetchAllReposRequest());
    axios
        .get(`${ROOT}/users/Richard-Thompson/repos`)
        .then((response) => {
          dispatch(fetchAllReposSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchAllReposError(error));
        });
  };
}

export function fetchAllReposRequest () {
  return {
    type: types.GET_ALL_REPOS_REQUEST
  };
}

export function fetchAllReposSuccess (repos) {
  return {
    type:types.GET_ALL_REPOS_SUCCESS,
    repos: repos
  };
}

export function fetchAllReposError (error) {
  return {
    type: types.GET_ALL_REPOS_ERROR,
    error: error
  };
}

export function searchForRepo (searchTerm, pageNumber) {
  return function (dispatch) {
    dispatch(searchForRepoRequest());
    axios
        .get(`${ROOT}/search/repositories?q=${searchTerm}&sort=stars&order=desc&per_page=10&page=${pageNumber}`)
        .then((response) => {
          dispatch(searchForRepoSuccess(response.data.items, response.data.total_count, pageNumber, response.headers.link));
        })
        .catch((error) => {
          dispatch(searchForRepoError(error));
        });

  };
}

export function searchForRepoRequest () {
  return {
    type: types.GET_SEARCH_RESULTS_REQUEST
  };
}

export function searchForRepoSuccess (searchResults, totalCount, pageNumber, lastPage) {
  return {
    type: types.GET_SEARCH_RESULTS_SUCCESS,
    searchResults: searchResults,
    totalCount: totalCount,
    pageNumber: pageNumber,
    lastPage: lastPage
  };
}

export function searchForRepoError (error) {
  return {
    type: types.GET_SEARCH_RESULTS_ERROR,
    error:error
  };
}

export function checkDecreasePage () {
  return {
    type: types.CHECK_DECREASE_PAGES
  };
}

export function checkIncreasePage () {
  return {
    type: types.CHECK_INCREASE_PAGES
  };
}
 
export function getReadme (owner, repo) {
  return function (dispatch) {
    dispatch(getReadmeRequest());
    axios
        .get(`${ROOT}/repos/${owner}/${repo}/readme`)
        .then((response) => {
          axios
              .get(response.data.git_url)
              .then((response) => {
                dispatch(getReadmeSuccess(response.data.content));
              });
        })
        .catch((error) => {
          dispatch(getReadmeError(error));
        });

  };
}

export function getReadmeRequest () {
  return {
    type: types.GET_README_REQUEST
  };
}

export function getReadmeSuccess (README) {
  return {
    type: types.GET_README_SUCCESS,
    readme: README
  };
}

export function getReadmeError (error) {
  return {
    type: types.GET_README_ERROR,
    error:error
  };
}
