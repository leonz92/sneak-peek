import React from 'react';
import Searchbar from './SearchBar';
import SearchResults from '../user/SearchResults';

class Home extends React.Component {
  render () {
    return (
      <div className='home container'>
        <div className='row'>
          <div className='col s12'>
            <Searchbar />
          </div>
        </div>
        <div className='divider'></div>
        <div className='row'>
          <div className='col s12'>
            <SearchResults />
          </div>
        </div>
      </div>
    )
  }
};

export default Home;
