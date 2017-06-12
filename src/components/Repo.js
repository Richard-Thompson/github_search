import React, {Component} from 'react';
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
       {this.props.name}
      </p>
    </div> 
    <div>
      {this.checkLanguage()}
    </div>
    <div>
      {lastUpdate}
    </div>
  </div>
    )
  }

  checkLanguage () {
    if(this.props.language === 'JavaScript'){
      return <p>JavaScript</p>
    }
    else{
      return null;
    }
  }
}

export default Repo;