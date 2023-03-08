import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Modal from '../Modal/Modal';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.scss';

const Services = ({ services }) => {
	const [selectedCard, setSelectedCard] = useState({
		activity: '',
		location: '',
		background: '',
		time: '',
		price: '',
		description: '',
		id: '',
	});

	const [isModalVisible, setIsModalVisible] = useState(false);

	const processData = (card) => {
		setSelectedCard(card);
		setIsModalVisible(true);
	};

	return (
		<>
			<Modal visible={isModalVisible} card={selectedCard} onCancelClick={() => setIsModalVisible(false)} />
			<div className='services-wrapper'>
				<Container>
					<Row>
						<Col>
							<h2>Предлагани Услуги</h2>
							<Row>
								{services.map((card) => {
									return <ServiceCard card={card} key={card.id} processData={processData} />;
								})}
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Services;
