import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import {checkLanguage} from '../helper/helperFunctions';
import '../css/Repo.css';

class Repo extends Component {

  render() { 
      const newDate = moment(new Date());
      const oldDate = moment(this.props.time);
      const lastUpdate = newDate.diff(oldDate, 'days');
      
    return(
      < div className = "card" > 
        <div className="card-content">
          <p className="title">
          <strong><a>{this.props.name}</a></strong>
          </p>
        </div>
        <div className="description">
          {this.props.description}
        </div>
        <div className="details">
            {checkLanguage(this.props.language)}
            <div className="details updated">
            Lastupdated {lastUpdate} days ago
            </div>
        </div>
      </div>
    )
  }
}

export default Repo;