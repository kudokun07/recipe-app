import React, { Component } from 'react';

import AllRecipesContainer from './containers/AllRecipesContainer/AllRecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="app-container cover">
        <AllRecipesContainer/>
      </div>
    );
  }
}

export default App;
