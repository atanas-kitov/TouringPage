import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<Container>
				<Row>
					<Col>
						<div className='footer-logo'></div>
						<div className='footer-arrow'></div>
						<div className='contact-list'>
							<p>12312132</p>
							<p>dfssfd@avcv</p>
							<p>Varna dsfa</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Footer;
