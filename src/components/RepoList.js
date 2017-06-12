import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends Component {
  render() {
    let filteredRepos = this.props.repos.filter((repo) => {
       return repo.name.indexOf(this.props.searchTerm) !== -1;
      
    });
    console.log(filteredRepos)
    return (
      <div>
        {filteredRepos.map((repo, i) => {
            return (<Repo
              description={repo.description}
              url={repo.url}
              name={repo.name}
              time={repo.time}
              user={repo.user}
              language={repo.language}
              stars={repo.stars}
              open_issues={repo.open_issues}
              forks={repo.forks}
              avatar={repo.avatar}/>)
          })}
      </div>
    )
  }

  filteredOrNot () {
    if(this.props.searchTerm === ''){
      return repos;
    }
    else{
      return filteredRepos;
    }
  }
 
}

export default RepoList;