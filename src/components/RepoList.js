import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends Component {
  render() {
    return (
      <div>

        {console.log(this.props.repos)}
        {this.props.repos.map((repo, i) => {
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
}

export default RepoList;