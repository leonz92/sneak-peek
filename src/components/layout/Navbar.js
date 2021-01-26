import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'
import {resetResults} from '../../store/reducers/searchReducer'

class Navbar extends React.Component {
  clickHandler = () => {
    this.props.clearResults()
  }
  render () {
    return (
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo left' onClick={this.clickHandler}>Sneak Peek</Link>
          {/* <SignedInLinks /> */}
          <SignedOutLinks />
        </div>
      </nav>
    )
  }
};

const mapDispatch = (dispatch) => ({
  clearResults: () => dispatch(resetResults())
})
export default connect(null, mapDispatch)(Navbar);
