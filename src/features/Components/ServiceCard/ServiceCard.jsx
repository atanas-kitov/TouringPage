import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';

const ServiceCard = ({ card, processData }) => {
	const onProcessData = () => {
		processData(card);
	};

	return (
		<Col sm='12' md='6' xl='4'>
			<div className='services-card'>
				<div className='title'>
					<h3 className='activity'>{card.activity}</h3>
					<h3 className='location'>{card.location}</h3>
				</div>
				<div
					className='services-image'
					style={{ backgroundImage: `url(${card.background})` }}
					onClick={onProcessData}></div>
				<div className='services-info'>
					<div>
						<img src='./time.svg' alt='time' />
						<span>Времетраене: {card.time}</span>
					</div>
					<div>
						<img src='./wallet.svg' alt='price' />
						<span>Цена: {card.price}лв.</span>
					</div>
					<Link to={`/${card.id}`} state={{ data: { card } }}>
						Виж повече
					</Link>
				</div>
			</div>
		</Col>
	);
};

export default ServiceCard;
