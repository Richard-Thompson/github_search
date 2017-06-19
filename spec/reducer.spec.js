import {expect} from 'chai';
import * as actions from '../src/actions/actions';
import reducer from '../src/reducer/reducer';

describe('reducer', function () {
  it('handles GET_ALL_REPOS_REQUEST', function () {
    const action = actions.fetchAllReposRequest();
    const initialState = {
      loading: false
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_REPOS_SUCCESS', function () {
    const action = actions.fetchAllReposSuccess(['repoData']);
    const initialState = {
      loading: false,
      repoData: []
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      repoData: ['repoData']

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_ALL_REPOS_ERROR', function () {
    const action = actions.fetchAllReposError('error');
    const initialState = {
      loading: false,
      error: null
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  
  it('handles GET_SEARCH_RESULTS_REQUEST', function () {
    const action = actions.searchForRepoRequest();
    const initialState = {
      loading: false
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: true

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_SEARCH_RESULTS_SUCCESS', function () {
    const lastPage = '<https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=2>; rel="next", <https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=100>; rel="last"';
    const action = actions.searchForRepoSuccess('hello',500, 4, 
  lastPage);
    const initialState = {
      loading: false,
      searchResults:[],
      totalResults:0,
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10],
      lastPage:null
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      searchResults: 'hello',
      totalResults: 500,
      activePage: 4,
      pages: [1,2,3,4,5,6,7,8,9,10],
      lastPage:100
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

   it('handles GET_SEARCH_RESULTS_SUCCESS when there is no lastPage in Link Headers of search reponse, if no last page then we expect to see activePage to be 1', function () {
    const lastPage = '<https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=2>; rel="next", <https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=100>; rel="next"';
    const action = actions.searchForRepoSuccess('hello',500, 4, 
  lastPage);
    const initialState = {
      loading: false,
      searchResults:[],
      totalResults:0,
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10],
      lastPage:null
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      searchResults: 'hello',
      totalResults: 500,
      activePage: 1,
      pages: [1,2,3,4,5,6,7,8,9,10],
      lastPage:1
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_SEARCH_RESULTS_SUCCESS when there when the pageNumber is greater than the lastPage', function () {
    const lastPage = '<https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=2>; rel="next", <https://api.github.com/search/repositories?q=hello&sort=stars&order=desc&per_page=10&page=100>; rel="last"';
    const action = actions.searchForRepoSuccess('hello',500, 101, 
  lastPage);
    const initialState = {
      loading: false,
      searchResults:[],
      totalResults:0,
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10],
      lastPage:null
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      searchResults: 'hello',
      totalResults: 500,
      activePage: 100,
      pages: [1,2,3,4,5,6,7,8,9,10],
      lastPage:100
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_SEARCH_RESULTS_ERROR', function () {
    const action = actions.searchForRepoError('error');
    const initialState = {
      loading: false,
      error:null
    };

    const actual = reducer(initialState, action);
    const expected = {
      loading: false,
      error: 'error'
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });


   it('handles CHECK_DECREASE_PAGES', function () {
    const action = actions.checkDecreasePage();
    const initialState = {
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10]
    };

    const actual = reducer(initialState, action);
    const expected = {
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10]
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles CHECK_DECREASE_PAGES in pages range 2 to 11', function () {
    const action = actions.checkDecreasePage();
    const initialState = {
      activePage:1,
      pages:[2,3,4,5,6,7,8,9,10,11]
    };

    const actual = reducer(initialState, action);
    const expected = {
      activePage:1,
      pages:[1,2,3,4,5,6,7,8,9,10]
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles CHECK_INCREASE_PAGES', function () {
    const action = actions.checkIncreasePage();
    const initialState = {
      activePage:11,
      pages:[1,2,3,4,5,6,7,8,9,10]
    };

    const actual = reducer(initialState, action);
    const expected = {
      activePage:11,
      pages:[2,3,4,5,6,7,8,9,10,11]
      

    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles GET_README_REQUEST', function () {
      const action = actions.getReadmeRequest();
      const initialState = {
        loading:false
      };

      const actual = reducer(initialState, action);
      const expected = {
        loading:true

      };
      expect(actual).to.eql(expected);
      expect(actual).to.not.equal(initialState);
    });

    it('handles GET_README_SUCCESS', function () {
      const action = actions.getReadmeSuccess('readme');
      const initialState = {
        loading:false,
        readme:''
      };

      const actual = reducer(initialState, action);
      const expected = {
        loading:false,
        readme: 'readme'

      };
      expect(actual).to.eql(expected);
      expect(actual).to.not.equal(initialState);
    });

    it('handles GET_README_ERROR', function () {
      const action = actions.getReadmeError('error');
      const initialState = {
        loading:false,
        error:null
      };

      const actual = reducer(initialState, action);
      const expected = {
        loading:false,
        error: 'error'

      };
      expect(actual).to.eql(expected);
      expect(actual).to.not.equal(initialState);
    });


});