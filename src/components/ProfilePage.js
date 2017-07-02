import React, {Component} from 'react';
import {connect} from 'react-redux';
import RepoList from './RepoList';

import {getAllRepos} from '../actions/actions';

import '../css/ProfilePage.css';

class ProfilePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input:''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    this.props.getAllRepos();
  }
  render () {
    
    return (
      <div className="container columns">
        <div className="user column is-hidden-mobile is-one-third-desktop is-hidden-tablet-only">
          <img
            className="user-avatar"
            src="https://avatars3.githubusercontent.com/u/23527306?v=3"/>
          <p className="profile-name">Richard-Thompson</p>
          <p className="bio">Add a bio</p>
          <div className="edit-profile-wrapper">
            <a className="button edit-profile">Edit profile</a>
          </div>
          <div className="space-wrapper">
            <div className="space"></div>
          </div>
          <p className="organizations"><strong>Organizations</strong></p>
          <div className="org-img-wrapper">
            <img
               className="org-img"
               src="https://avatars3.githubusercontent.com/u/16081355?v=3"/>
          </div>
        </div>

        <div className="repos column is-full-mobile is-full-tablet is-two-thirds-desktop">

          <div className="subnav is-full-mobile is-full-tablet is-full-desktop">
            <div className="tab">
              Overview
            </div>
            <div className="tab is-active">
              Repositories
            </div>
            <div className="tab">
              Stars
            </div>
            <div className="tab">
              Followers
            </div>
             <div className="tab">
              Following
            </div>
          </div>

          <div className="search is-full-tablet is-three-thirds-desktop">
            <input className="repo-search-box" type="text" onChange={this.onChange} value={this.state.input} placeholder="Search repositories..."/>
            <a className="button is-hidden-mobile">Type: <strong>All</strong></a>
            <a className="button is-hidden-mobile">Language: <strong>All</strong></a>
            <a className="button is-hidden-mobile green"><strong>New</strong></a>
          </div>

          <div className="repo-list column is-three-thirds">
            <RepoList searchTerm={this.state.input} repos={this.props.repos}/>
          </div>
        </div>
      </div>
    );
  }
  onChange (event) {
    this.setState({
      input:event.target.value
    });
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repoData
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getAllRepos: () => {
      dispatch(getAllRepos());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);