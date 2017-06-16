import * as types from '../src/actions/types';
import * as actions from '../src/actions/actions';
import {expect} from 'chai';

describe('actions', () => {
  describe('getAllRepos', () => {
    it('Request: returns expected action' , () => {
      const action = actions.fetchAllReposRequest();
      expect(action).to.eql({
        type: types.GET_ALL_REPOS_REQUEST
      });
    });
    it('Success: returns expected action', () => {
      const action = actions.fetchAllReposSuccess('repoData');
      expect(action).to.eql({
        type:types.GET_ALL_REPOS_SUCCESS,
        repos: 'repoData'
      });
    });
    it('Error: returns expected action', () => {
      const action = actions.fetchAllReposError('error');
      expect(action).to.eql({
        type:types.GET_ALL_REPOS_ERROR,
        error: 'error'
      });
    }); 
  });

  describe('searchForRepo', () => {
    it('Request: returns expected action' , () => {
      const action = actions.searchForRepoRequest();
      expect(action).to.eql({
        type: types.GET_SEARCH_RESULTS_REQUEST
      });
    });
    it('Success: returns expected action', () => {
      const action = actions.searchForRepoSuccess('searchResults', 'totalCount', 'pageNumber', 'lastPage');
      expect(action).to.eql({
        type: types.GET_SEARCH_RESULTS_SUCCESS,
        searchResults: 'searchResults',
        totalCount: 'totalCount',
        pageNumber: 'pageNumber',
        lastPage: 'lastPage'
      });
    });
    it('Error: returns expected action', () => {
      const action = actions.searchForRepoError('error');
      expect(action).to.eql({
        type:types.GET_SEARCH_RESULTS_ERROR,
        error: 'error'
      });
    }); 
  });

  describe('CheckDecreasePage', () => {
    it('returns expected action' , () => {
      const action = actions.checkDecreasePage();
      expect(action).to.eql({
        type: types.CHECK_DECREASE_PAGES
      });
    });
  });

   describe('CheckIncreasePage', () => {
    it('returns expected action' , () => {
      const action = actions.checkIncreasePage();
      expect(action).to.eql({
        type: types.CHECK_INCREASE_PAGES
      });
    });
  });

  describe('getReadme', () => {
    it('Request: returns expected action' , () => {
      const action = actions.getReadmeRequest();
      expect(action).to.eql({
        type: types.GET_README_REQUEST
      });
    });
    it('Success: returns expected action', () => {
      const action = actions.getReadmeSuccess('README');
      expect(action).to.eql({
        type: types.GET_README_SUCCESS,
        readme: 'README'
      });
    });
    it('Error: returns expected action', () => {
      const action = actions.getReadmeError('error');
      expect(action).to.eql({
        type:types.GET_README_ERROR,
        error: 'error'
      });
    }); 
  });

});