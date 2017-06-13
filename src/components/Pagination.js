import React, {Component} from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  render () {
    return (
      <div className="pagination-container">
        <div className ="prev">Prev</div>
        {this.props.pages.map((pageNumber, i) => {
          if(pageNumber === this.props.activePage) {
            return (
              <div key={i} className="active-page">{pageNumber}</div>
            )
          }
          else{
            return (
              <div key={i} className="page">{pageNumber}</div>
            )
          }
        })}
        <div className="next">Next</div>
      </div>
    )
  }
}

export default Pagination;