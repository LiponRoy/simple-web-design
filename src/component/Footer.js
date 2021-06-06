import React from 'react';

const Footer = () => {
	return (
		<div>
			<div className='row text-center footerUs'>
				<div className='col-md-12 FooterSocialIcon' data-aos='zoom-in'>
					<a href=''>
						<i class='far fa-bell'></i>
					</a>
					<a href=''>
						<i class='fas fa-phone-square'></i>
					</a>
					<a href=''>
						<i class='fas fa-edit'></i>
					</a>
					<a href=''>
						<i class='far fa-share-square'></i>
					</a>
				</div>
			</div>
			<div className='row footerAll '>
				<div className='col-md-3 provider'>
					<h5>THE PROVIDERS</h5>
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nisi inventore perferendis nihil, esse corporis
						similique quidem molestias aperiam vitae mollitia!
					</p>
				</div>
				<div className='col-md-3 product d-flex flex-row justify-content-center'>
					<div className='allproduct'>
						<h4>PRODUCT</h4>
						<hr />
						<h5>Html 5</h5>
						<h5>Css 3</h5>
						<h5>Bootstarp 5</h5>
						<h5>Javascript</h5>
					</div>
				</div>
				<div className='col-md-3 product d-flex flex-row justify-content-center'>
					<div className='usefullLink'>
						<h4>USEFULL LINK</h4>
						<hr />
						<h5>Home</h5>
						<h5>About</h5>
						<h5>Services</h5>
						<h5>Contact</h5>
					</div>
				</div>
				<div className='col-md-3 contact d-flex flex-row justify-content-center'>
					<div className='contactAll'>
						<h4>CONTACT</h4>
						<hr />
						<div>
							<i class='fab fa-facebook-square'></i>
							<span>Facebook Page</span>
						</div>
						<div>
							<i class='fab fa-google-plus-g'></i>
							<span>Google Link All</span>
						</div>
						<div>
							<i class='far fa-bell'></i>
							<span>Social Me</span>
						</div>
						<div>
							<i class='fab fa-google-plus-g'></i>
							<span>Google Link All</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
