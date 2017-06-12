import React from 'react';

import '../css/MainNavbar.css'

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [
        'NorthCoders-News', 'NorthCoders-News-API'
      ],
      typed: ''
    }
  }

  onChange(event) {
    this.setState({typed: event.target.value})
  }

  render() {
    return (
       <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <i className="fa fa-github fa-3x"></i>
          </a>
          <a className="nav-item">
            <input
              type="text"
              placeholder="Search Github"
              onChange={this.onChange}
              className="search-box"/>
          </a>
          <a className="nav-item">
            Pull Requests
          </a>
          <a className="nav-item">
            Issues
          </a>
          <a className="nav-item">
            MarketPlace
          </a>
          <a className="nav-item">
            Gist
          </a>
           <i className="fa fa-plus"/>

          <img
            className="nav-item avatar"
            src="https://avatars3.githubusercontent.com/u/23527306?v=3"/>

        </div>

        <div className="nav-center">
         
        </div>

      </nav>
    )
  }

}

export default MainNavbar;
