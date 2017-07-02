import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';
import '../css/MainNavbar.css';

class MainNavbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
      navHamburgerDisplay: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickNav = this.onClickNav.bind(this);
  }
  render () {
    return (
    <div>
      <nav className="nav">
        <div className="nav-center">
          
            <Link to="/"><i className="nav-item fa fa-github fa-3x"></i></Link>
          
          <a className="nav-item search">
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
          <a className="nav-item is-hidden-mobile is-hidden-tablet-only">
            Pull Requests
          </a>
          <a className="nav-item is-hidden-mobile is-hidden-tablet-only">
            Issues
          </a>
          <a className="nav-item is-hidden-mobile is-hidden-tablet-only">
            MarketPlace
          </a>
          <a className="nav-item is-hidden-mobile is-hidden-tablet-only">
            Gist
          </a>
           <i className="fa fa-plus is-hidden-mobile is-hidden-tablet-only"/>

          <Link to="/"><img
            className="nav-item avatar is-hidden-mobile is-hidden-tablet-only"
            src="https://avatars3.githubusercontent.com/u/23527306?v=3"/> </Link>

          <div className="nav-item nav-hamburger is-hidden-desktop" onClick={this.onClickNav}>
              <span/>
              <span/>
              <span/>
          </div>
        </div>
      </nav>
      <div className={`is-hidden-desktop ${this.navHamburgerDisplay()}`}>
          <div className="hidden-tab">
          Pull Requests
          </div>
          <div className="hidden-tab">
          Issues
          </div>
          <div className="hidden-tab">
          MarketPlace
          </div>
          <div className="hidden-tab">
          Gist
          </div>
       </div>
    </div>
    

    );
  }

  navHamburgerDisplay () {
    return this.state.navHamburgerDisplay ? 'hamburger-menu-on' : 'hamburger-menu-off';
  }

  onClickNav () {
    this.setState({
      navHamburgerDisplay: !this.state.navHamburgerDisplay
    })
  }

  onChange (event) {
    this.setState({input: event.target.value});
  }

  onSubmit (event) {
    event.preventDefault();
    console.log('hello');
    browserHistory.push(`/search/repositories/${this.state.input}`);
    this.setState({
      input:''
    });

  }

}

export default MainNavbar;
