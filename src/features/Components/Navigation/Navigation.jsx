import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navigation.scss';

const Navigation = () => {
	return (
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
					<div className='logo'>
						<div className='logo-arrow'></div>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default Navigation;
