import React, {Component} from 'react';
import {connect} from 'react-redux';
import RepoList from './RepoList';

import {getAllRepos} from '../actions/actions'

import '../css/ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    this.props.getAllRepos();
  }
  render() {
    
    return (
      <div className="container">
        <div className="user">
          <img
            className="user-avatar"
            src="https://avatars3.githubusercontent.com/u/23527306?v=3"/>
          <p className="name">Richard-Thompson</p>
          <p className="bio">Add a bio</p>
          <a className="button edit-profile">Edit profile</a>
          <div className="space"></div>
          <p><strong>Organizations</strong></p>
          <img
            className="org-img"
            src="https://avatars3.githubusercontent.com/u/16081355?v=3"/>

        </div>

        <div className="repos">

          <div className="subnav">
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

          <div className="search">
            <input className="repo-search-box" type="text" onChange={this.onChange} value={this.state.input} placeholder="Search repositories..."/>
            <a className="button">Type: <strong>All</strong></a>
            <a className="button">Language: <strong>All</strong></a>
            <a className="button green-button">New</a>
          </div>

          <div className="repo-list">
            <RepoList searchTerm={this.state.input} repos={this.props.repos}/>
          </div>
        </div>
      </div>
    )
  }
  onChange (event) {
    this.setState({
      input:event.target.value
    })
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repoData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllRepos: () => {
      dispatch(getAllRepos());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);