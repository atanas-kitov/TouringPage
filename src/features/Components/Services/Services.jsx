import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.scss';

const Services = ({ services }) => {
	return (
		<div className='services-wrapper'>
			<Container>
				<Row>
					<Col>
						<h2>Предлагани Услуги</h2>
						<Row>
							{services.map((card) => {
								return <ServiceCard card={card} />;
							})}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Services;
