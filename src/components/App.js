import React from 'react';
import MainNavbar from './MainNavbar';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <MainNavbar />
        {this.props.children}
      </div>
    )
  }
}

export default App;