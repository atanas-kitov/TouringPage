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
						<span
							className='about-us-btn'
							onClick={() => {
								document.getElementById('about-wrapper').scrollIntoView({ behavior: 'smooth' });
							}}>
							За нас
						</span>
					</Col>
					<Col>
						<span
							className='contacts-btn'
							onClick={() => {
								document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
							}}>
							Контакти
						</span>
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
