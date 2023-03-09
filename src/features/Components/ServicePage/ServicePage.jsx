import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './ServicePage.scss';

const ServicePage = () => {
	const location = useLocation();
	const { data } = location.state;

	return (
		<Container className='service-page'>
			<Row>
				<Col>
					<div className='services-card'>
						<div className='title'>
							<h3 className='activity'>{data.card.activity}</h3>
							<h3 className='location'>{data.card.location}</h3>
						</div>
						<div
							className='services-image'
							style={{ backgroundImage: `url(${data.card.background})` }}></div>
						<div className='services-info'>
							<p>{data.card.description}</p>
							<div className='buttons'>
								<div>
									<img src='./time.svg' alt='time' />
									<span>Времетраене: {data.card.time}ч.</span>
								</div>
								<div>
									<img src='./wallet.svg' alt='price' />
									<span>Цена: {data.card.price}лв.</span>
								</div>
							</div>
							<Link to={'/'}>Назад</Link>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ServicePage;
