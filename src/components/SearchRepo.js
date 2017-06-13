import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import {checkLanguage} from '../helper/helperFunctions';
import '../css/SearchRepo.css';

class SearchRepo extends Component {
 
  render() {
     const newDate = moment(new Date());
      const oldDate = moment(this.props.time);
      const lastUpdate = newDate.diff(oldDate, 'days');
      
    return(
      <div className="card search-card" > 
        <div className="card-content overview">
          <p className="search-title">
          <strong><Link to={`Richard-Thompson/${this.props.name}`}>{this.props.name}</Link></strong>
          </p>
           <p className="search-description">{this.props.description}</p>
           <p className="last-updated">Updated {lastUpdate} days ago </p>
        </div>
        
        <div className="language">
            {checkLanguage(this.props.language)}
        </div>
      </div>
    )
  }
}

export default SearchRepo;