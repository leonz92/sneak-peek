import React from 'react';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
      password: '',
      firstName: '',
      lastName: ''
		};
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.id]: evt.target.value,
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className='container'>
				<form className='white' onSubmit={this.handleSubmit}>
					<h5 className='grey-text text-darken-3'>Sign Up</h5>
					<div className='input-field'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='firstName'>First Name</label>
						<input type='text' id='firstName' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<label htmlFor='lastName'>Last Name</label>
						<input type='text' id='lastName' onChange={this.handleChange} />
					</div>
					<div className='input-field'>
						<button className='btn red z-depth-0'>Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
