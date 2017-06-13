import React, {Component} from 'react';
import {SearchForRepo} from '../actions/actions';
import {browserHistory} from 'react-router';

import '../css/MainNavbar.css'

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
       <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <i className="fa fa-github fa-3x"></i>
          </a>
          <a className="nav-item">
            <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Search Github"
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              value={this.state.input}
              className="search-box"/>
              </form>
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

  onChange(event) {
    this.setState({input: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault();
    console.log('hello')
    browserHistory.push(`/search/repositories/${this.state.input}`)

  }

}

export default MainNavbar;
