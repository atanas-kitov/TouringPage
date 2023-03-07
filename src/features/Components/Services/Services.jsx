import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Services.scss';

const Services = ({ services }) => {
	return (
		<div className='services'>
			<Container>
				<Row>
					<Col>
						<h2>Предлагани Услуги</h2>
						<div className='card'>
							<Row>
								<Col className='card' sm='12' lg='3'>
									<div className='title'>
										<h3 className='activity'>ASDads</h3>
										<h3 className='location'>ASasdds</h3>
									</div>
									<div
										className='services-image'
										style={{ backgroundImage: `url(${'./slider2-1.jpg'})` }}></div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Services;
