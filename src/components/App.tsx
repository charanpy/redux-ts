import React from 'react';
import { Provider } from 'react-redux';
import store from '../state/store';
import RepoList from './RepoList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search Repo</h1>
      <RepoList />
    </Provider>
  );
};

export default App;
