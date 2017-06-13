import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
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
          <strong><Link to={`Richard-Thompson/${this.props.name}`}>{this.props.name}</Link></strong>
          </p>
        </div> 
        <div className="details">
            {this.checkLanguage()}
            <div className="details updated">
            {lastUpdate}
            </div>
        </div>
      </div>
    )
  }

  checkLanguage () {
    if(this.props.language === 'JavaScript') {
      return (<div className="details"><div className="javascript"></div><p>JavaScript</p></div>)
    }
    else if(this.props.language === 'CSS') {
      return (<div className="details"><div className="css"></div><p>CSS</p></div>)
    }
    else if(this.props.language === 'HTML') {
       return (<div className="details"><div className="html"></div><p>HTML</p></div>)
    }
    else{
      return null;
    }
  }
}

export default Repo;