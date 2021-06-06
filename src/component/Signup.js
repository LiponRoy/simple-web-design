import React from 'react';

const Signup = () => {
	return (
		<div className=''>
			<div className='container ' data-aos='zoom-in'>
				<div className='row d-flex flex-row justify-content-center align-items-center'>
					<div className='heading col-md-6 '>
						<img
							src='/imgs/pong.jpg'
							className='img-fluid img-thumbnail'
							alt=''
						/>
					</div>
					<div className='col-md-6'>
						<form className='signUpUs'>
							<h2>Contact with us</h2>
							<div class='form-group'>
								<label htmlFor='exampleInputEmail1'>Name</label>
								<input
									type='name'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									placeholder='Enter name'
								/>
							</div>
							<div class='form-group'>
								<label htmlFor='exampleInputEmail1'>
									Email address
								</label>
								<input
									type='email'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									placeholder='Enter email'
								/>
							</div>
							<div class='form-group'>
								<label htmlFor='exampleInputPassword1'>
									Password
								</label>
								<input
									type='password'
									class='form-control'
									id='exampleInputPassword1'
									placeholder='Password'
								/>
							</div>
							<div class='form-check'>
								<input
									type='checkbox'
									class='form-check-input'
									id='exampleCheck1'
								/>
								<label
									class='form-check-label'
									for='exampleCheck1'>
									Check me out
								</label>
							</div>
							<button
								type='submit'
								class='signupButton btn btn-block'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
