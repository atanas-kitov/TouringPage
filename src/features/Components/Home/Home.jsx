import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
	return (
		<div className='main-page'>
			<Container>
				<Row>
					<Col>
						<div className='navigation'>
							<ul>
								<li>За нас</li>
								<li>Контакти</li>
							</ul>
						</div>
						<div className='logo'></div>
						<div className='title-wrapper'></div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
