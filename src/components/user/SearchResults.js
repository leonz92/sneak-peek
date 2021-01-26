import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleSneak } from '../../store/reducers/sneakerReducer'
import { Link } from 'react-router-dom'


class SearchResults extends React.Component {
  // constructor () {
  //   super()
  // }
  clickHandler = (evt) => {
    const styleId = evt.target.getAttribute('styleid')
    // this.props.getSingleSneak(styleId)
    const single = this.props.results.filter((result) => result.styleID === styleId)
    console.log(single)
    this.props.getSingleSneak(single[0])
  }

  render () {
    const { results } = this.props;
    return (
      <div className='result-list' onClick={this.clickHandler}>
				{results.length &&
					results.map((result, idx) => {
						// console.log(result.thumbnail)
            return (
							<Link to='/singlesneak' key={idx}>
								<div className='result-item'  styleid={result.styleID}>
									<img
										src={result.thumbnail}
										alt='pic-of-shoe'
										height='50px'
										styleid={result.styleID}
									/>
									<span styleid={result.styleID}>{result.shoeName}</span>
								</div>
							</Link>
						);
					})}
			</div>
		);
  }
}

const mapState = state => ({
  results: state.results,
  singleSneak: state.singleSneak
})

const mapDispatch = dispatch => ({
  getSingleSneak: (styleId) => dispatch(fetchSingleSneak(styleId))
})

export default connect(mapState, mapDispatch)(SearchResults);
