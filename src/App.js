import React, { Component } from 'react';
import { hashHistory } from 'react-router';
class App extends Component {
  render() {
    const {logo} = this.props
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
       

        {this.props.children}
        
      </div>
    );
  }
}

export default App;
