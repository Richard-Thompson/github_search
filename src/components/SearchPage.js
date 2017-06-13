import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchForRepo} from '../actions/actions';
import SearchList from './SearchList';
import Pagination from './Pagination';


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