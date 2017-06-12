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
        })
  }
}

export function fetchAllReposRequest() {
  return{
    type: types.GET_ALL_REPOS_REQUEST
  }
}

export function fetchAllReposSuccess (repos) {
  return {
    type:types.GET_ALL_REPOS_SUCCESS,
    repos: repos
  }
}

export function fetchAllReposError (error) {
  return {
    type: types.GET_ALL_REPOS_ERROR,
    error: error
  }
}