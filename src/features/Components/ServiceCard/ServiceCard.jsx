import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import './ServiceCard.scss';

const ServiceCard = ({ card, processData }) => {
	const onProcessData = () => {
		processData(card);
	};

	return (
		<Col sm='12' md='6' xl='4' onClick={onProcessData}>
			<div className='services-card'>
				<div className='title'>
					<h3 className='activity'>{card.activity}</h3>
					<h3 className='location'>{card.location}</h3>
				</div>
				<div className='services-image' style={{ backgroundImage: `url(${card.background})` }}></div>
				<div className='services-info'>
					<div>
						<img src='./time.svg' alt='time' />
						<span>Времетраене: {card.time}</span>
					</div>
					<div>
						<img src='./wallet.svg' alt='price' />
						<span>Цена: {card.price}лв.</span>
					</div>
					<button>Виж повече</button>
				</div>
			</div>
		</Col>
	);
};

export default ServiceCard;
