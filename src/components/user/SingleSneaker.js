import React from 'react';
import { connect } from 'react-redux';

class SingleSneaker extends React.Component {
  render () {
    const {singleSneak} = this.props
    return singleSneak.length === 0 ? (
			<div className='loading'>LOADING...</div>
		) : (
			<div className='product'>
				<div className='product-photo'>
					<img src={singleSneak.thumbnail} alt='product-thumbnail' />
				</div>
				<div className='product-information'>
					<h2 className='product-name'>{singleSneak.shoeName}</h2>
					<ul className='product-details'>
						<li>
							<span>Make:</span> {singleSneak.make}
						</li>
						<li>
							<span>Colorway:</span> {singleSneak.colorway}
						</li>
						<li>
							<span>Style ID:</span> {singleSneak.styleID}
						</li>
						<li>
							<span>Release Date:</span> {singleSneak.releaseDate}
						</li>
						<li>
							<span>Retail Price:</span> ${singleSneak.retailPrice}
						</li>
            </ul>
            <div>
					<label htmlFor='shoe-size'>Shoe Size</label>
					<select className='shoe-size' id='shoe-size' defaultValue=''>
						<option value='' disabled>
							Choose your size
						</option>
						<option value='3.5'>3.5</option>
						<option value='4'>4</option>
						<option value='4.5'>4.5</option>
						<option value='5'>5</option>
						<option value='5.5'>5.5</option>
						<option value='6'>6</option>
						<option value='6.5'>6.5</option>
						<option value='7'>7</option>
						<option value='7.5'>7.5</option>
						<option value='8'>8</option>
						<option value='8.5'>8.5</option>
						<option value='9'>9</option>
						<option value='9.5'>9.5</option>
						<option value='10'>10</option>
						<option value='10.5'>10.5</option>
						<option value='11'>11</option>
						<option value='11.5'>11.5</option>
						<option value='12'>12</option>
						<option value='12.5'>12.5</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
              </select>
              <button>Add to Collection</button>
            </div>

				</div>
			</div>
		);
  }
}

const mapState = (state) => ({
	singleSneak: state.singleSneak,
});

export default connect(mapState)(SingleSneaker);
