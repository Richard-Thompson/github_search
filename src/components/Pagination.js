import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchForRepo} from '../actions/actions';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor (props) {
    super(props);

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  render () {
    return (
      <div className="pagination-container">
        <div className ="prev" onClick={this.prevPage}>Prev</div>
        <div className="page is-hidden-tablet is-hidden-desktop">{this.props.activePage}</div>
        <div className="pages is-hidden-mobile">
            {this.props.pages.map((pageNumber, i) => {
              if (pageNumber === this.props.activePage) {
                return (
                  <div key={i} className="active-page">{pageNumber}</div>
                );
              }
              else {
                return (
                  <div key={i} className="page">{pageNumber}</div>
                );
              }
            })}
          </div>
        <div className="next" onClick={this.nextPage}>Next</div>
      </div>
    );
  }

  prevPage () {
      this.props.fetchAnotherPage(this.props.searchTerm, this.props.pageNumber - 1);
      
    }
  

  nextPage () {
     this.props.fetchAnotherPage(this.props.searchTerm, this.props.pageNumber + 1);
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAnotherPage: (searchTerm, pageNumber) => {
      dispatch(searchForRepo(searchTerm, pageNumber));
    }
  };
}

function mapStateToProps (state) {
  return {
    pageNumber: state.activePage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);