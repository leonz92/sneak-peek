import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../store/reducers/searchReducer';

class Searchbar extends React.Component {
	constructor () {
		super()
		this.state = {
			keyword: ''
		}
	}
	handleChange = (evt) => {
    this.setState({
			[evt.target.id]: evt.target.value,
		});
	}
	handleClick = (evt) => {
		// evt.preventDefault()
		this.props.getResults(this.state.keyword)
	}
	render () {
		const {results} = this.props
		return (
			(<div className='search-bar'>
				<div className='col s10'>
					<label htmlFor='keyword'>Search by style #</label>
					<input type='text' id='keyword' onChange={this.handleChange}/>
				</div>
				<button className='btn red col s2' id='add-to-collection' onClick={this.handleClick}>Peek</button>
			</div>)
		);
	}
};

const mapState = (state) => ({
	results: state.results
})

const mapDispatch = (dispatch) => ({
	getResults: (keyword) => dispatch(fetchResults(keyword))
})

export default connect(mapState, mapDispatch)(Searchbar);
