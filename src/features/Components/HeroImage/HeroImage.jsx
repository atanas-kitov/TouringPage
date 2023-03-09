import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeroImage.scss';

const HeroImage = () => {
	return (
		<div className='main-page'>
			<div className='logo'>
				<div className='logo-arrow'></div>
			</div>
			<div className='woman'>
				<div className='line'></div>
			</div>
			<div className='navigation-wrapper'>
				<Container>
					<Row className='navigation'>
						<Col>
							<div className='hamburger'>
								<div></div>
							</div>
							<p className='about-us-btn'>
								<span
									onClick={() => {
										document.getElementById('about-wrapper').scrollIntoView({ behavior: 'smooth' });
									}}>
									За нас
								</span>
							</p>
						</Col>
						<Col>
							<p className='contacts-btn'>
								<span
									onClick={() => {
										document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
									}}>
									Контакти
								</span>
							</p>
						</Col>
					</Row>
					<div className='title-wrapper'>
						<h1>
							Открий нови <br />
							вълнуващи места с нас!
						</h1>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HeroImage;
