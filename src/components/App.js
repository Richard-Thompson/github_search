import React from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <MainNavbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;