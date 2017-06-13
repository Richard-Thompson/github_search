import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchForRepo} from '../actions/actions';
import SearchList from './SearchList';
import Pagination from './Pagination';
import '../css/SearchPage.css';


class SearchPage extends Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    this.props.searchRepos(this.props.params.searchTerm, 1)
  }
  
  render () {
    return (
      <div>
        <div className="search-subnav">
            <div className="search-tab is-active">
              Repositories
            </div>
            <div className="search-tab">
              Code
            </div>
            <div className="search-tab">
              Commits
            </div>
            <div className="search-tab">
              Issues
            </div>
             <div className="search-tab">
              Wikis
            </div>
            <div className="search-tab">
              Users
            </div>
            <div className="adv-search">
              Advance search
            </div>
          </div>

         <SearchList repos={this.props.search}/>

         <Pagination 
            pages={this.props.pages}
            activePage={this.props.activePage}
            searchTerm={this.props.params.searchTerm}
          />

      </div> 
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    searchRepos: (searchTerm, pageNumber) => {
      dispatch(searchForRepo(searchTerm, pageNumber));
    }
  }
}
function mapStateToProps (state) {
  return {
    search: state.searchResults,
    pages: state.pages,
    activePage: state.activePage    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);