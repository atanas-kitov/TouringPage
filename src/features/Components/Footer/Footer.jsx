import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { FaPhoneVolume, FaEnvelope, FaMapPin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<Container>
				<Row>
					<Col className='footer-logo' sm='12' lg='2'></Col>
					<Col className='footer-arrow' lg='7'></Col>
					<Col className='contact-list' sm='12' lg='3'>
						<div>
							<span>+359 875 625 985</span>
							<FaPhoneVolume />
						</div>
						<div>
							<span>travel@gmail.com</span>
							<FaEnvelope />
						</div>
						<div>
							<span>Варна, ул. Някоя 23</span>
							<FaMapPin />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Footer;
