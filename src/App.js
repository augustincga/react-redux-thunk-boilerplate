import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts/Posts';
import PostForm from './components/PostForm/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
