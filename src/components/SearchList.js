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
              url={repo.url}
              name={repo.name}
              time={repo.updated_at}
              user={repo.user}
              language={repo.language}
              stars={repo.stars}
              open_issues={repo.open_issues}
              forks={repo.forks}
              avatar={repo.avatar}/>
            
              )
      })}
      </div>
    )
  }

}

export default SearchList;