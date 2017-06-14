import React, {Component} from 'react';
import SearchRepo from './SearchRepo';

class SearchList extends Component {
  
  render() {
    return (
      <div>
        {this.props.repos.map((repo, i) => {
         return (
         <SearchRepo
              description={repo.description}
              url={repo.svn_url}
              name={repo.name}
              time={repo.updated_at}
              user={repo.owner.login}
              language={repo.language}
              stars={repo.stargazers_count}
              open_issues={repo.open_issues}
              forks={repo.forks}
              avatar={repo.owner.avatar_url}
              branch={repo.default_branch}
              fullName={repo.full_name}/>
            
              )
      })}
      </div>
    )
  }

}

export default SearchList;