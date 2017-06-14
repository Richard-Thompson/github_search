import React, {Component} from 'react';
import Repo from './Repo';
import '../css/RepoList.css';

class RepoList extends Component {
  render () {

    let filteredRepos = this.props.repos.filter((repo) => {
       return repo.name.toLowerCase().indexOf(this.props.searchTerm) !== -1;
      
    });
   

    let sortedRepos = filteredRepos.sort((a,b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
    
    return (
      <div>
      {this.filteredOrNot(sortedRepos)}
      </div>
    );
  }

  filteredOrNot (sortedRepos) {
    if (sortedRepos.length === 0) {
      return (<div className="no-repos"><strong>Richard-Thompson doesnt have any repositories that match.</strong></div>);
    }
    else {
      return (<div>
        {sortedRepos.map((repo, i) => {
            return (<Repo
              key={i}
              description={repo.description}
              url={repo.url}
              name={repo.name}
              time={repo.updated_at}
              user={repo.user}
              language={repo.language}
              stars={repo.stars}
              open_issues={repo.open_issues}
              forks={repo.forks}
              avatar={repo.avatar}/>);
          })}
      </div>);
    }
  }
   
}
export default RepoList;