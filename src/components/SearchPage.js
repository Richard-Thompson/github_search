import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchForRepo} from '../actions/actions';
import SearchList from './SearchList';


class SearchPage extends Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    this.props.searchRepos(this.props.params.searchTerm)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.params.searchTerm !== nextProps.params.searchTerm) {
      this.props.searchRepos(nextProps.params.searchTerm)
    }
  }
  render () {
    return (
      <div>
         <SearchList repos={this.props.search}/>
      </div> 
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    searchRepos: (searchTerm) => {
      dispatch(searchForRepo(searchTerm));
    }
  }
}
function mapStateToProps (state) {
  return {
    search: state.searchResults,
    page: state.page,
    pages: state.pages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);