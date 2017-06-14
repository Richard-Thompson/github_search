import React, {Component} from 'react';
import moment from 'moment';
import {checkLanguage} from '../helper/helperFunctions';
import '../css/SearchRepo.css';

class SearchRepo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
 
  render () {
     const newDate = moment(new Date());
      const oldDate = moment(this.props.time);
      const lastUpdate = newDate.diff(oldDate, 'days');
      
    return (
    <div>
      <div className="card search-card" > 
        <div className="card-content overview">
          <p className="search-title">
          <strong><a onClick={this.clickHandler}>{this.props.name}</a></strong>
          </p>
           <p className="search-description">{this.props.description}</p>
           <p className="last-updated">Updated {lastUpdate} days ago </p>
        </div>
        
        <div className="language">
            {checkLanguage(this.props.language)}
        </div>
      </div>
      {this.state.showDetails ? 
      <div className="more-details">
        <div className="user-profile">
          <img className="users-avatar" src={this.props.avatar}/>
          <p className="name">{this.props.user}</p>
          <a className="full-name" href={this.props.url} > {this.props.fullName} </a>
          <a> {this.props.branch} </a>
        </div>
        <div className="repo-details">
          <div className="section">
            <i className="fa fa-star-o" aria-hidden="true"/><p>{this.props.stars}</p>
          </div>
          <div className="section">
            <i className="fa fa fa-info-circle" aria-hidden="true"/><p>{this.props.open_issues}</p>
          </div>
          <div className="section">
            <i className="fa fa fa-code-fork" aria-hidden="true"/><p>{this.props.forks}</p>
           </div> 
          
        </div>
      </div> : null}
    </div>
    );
  }

  clickHandler () {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }
}

export default SearchRepo;