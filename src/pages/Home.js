import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import { BsBuilding, BsGearFill } from 'react-icons/bs';

const Home = () => {
	return (
		<Fragment>
			{/*nav ber */}
			<section>
				<Navbar></Navbar>
			</section>
			{/*End nav ber */}

			{/* first team section */}
			<section>
				<div className='firstTeamSection container pt-3'>
					<h2>Team Section</h2> <hr />
					<div className='row pt-1'>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='EColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>
								<div className='Alltitle'>
									<h4>engineer</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Laboriosam, ullam!
									</p>
									<a className='btn btn-primary' href='#'>
										MORE INFO
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* End first team section */}

			{/* team section */}
			<section>
				<div className='teamSection container pt-3'>
					<h2>Secont Team Section</h2> <hr />
					<div className='row pt-1'>
						<div className='col-md-4'>
							<div className='everyColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>

								<div className='alltext d-flex flex-row justify-content-center align-items-center'>
									<div className=''>
										<h4>Engineer</h4>
										<p>Lorem ipsum dolor sit amet.</p>
										<a className='btn btn-info' href=''>
											more info
										</a>
									</div>
								</div>
							</div>
							<div className='subtitle'>
								<h4>engineer</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Laboriosam, ullam!
								</p>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='everyColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>

								<div className='alltext d-flex flex-row justify-content-center align-items-center'>
									<div className=''>
										<h4>Engineer</h4>
										<p>Lorem ipsum dolor sit amet.</p>
										<a className='btn btn-info' href=''>
											more info
										</a>
									</div>
								</div>
							</div>
							<div className='subtitle'>
								<h4>engineer</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Laboriosam, ullam!
								</p>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='everyColumn'>
								<img
									src='/imgs/wp.jpg'
									className='img-fluid'
									alt='no image found'
								/>

								<div className='alltext d-flex flex-row justify-content-center align-items-center'>
									<div className=''>
										<h4>Engineer</h4>
										<p>Lorem ipsum dolor sit amet.</p>
										<a className='btn btn-info' href=''>
											more info
										</a>
									</div>
								</div>
							</div>
							<div className='subtitle'>
								<h4>engineer</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Laboriosam, ullam!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* practice */}
			<section className='my-5'>
				<div className='redboxMeUs'>
					<a href=''>
						<i class='fas fa-angle-left'></i>
					</a>
					<a href=''>
						<i class='fas fa-angle-left'></i>
					</a>
					<a href=''>
						<i class='fas fa-angle-left'></i>
					</a>
				</div>
			</section>

			{/* End team section */}
		</Fragment>
	);
};

export default Home;
