import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';

const Home = () => {
	return (
		<div className='main-page'>
			<Container>
				<Row className='navigation'>
					<Col md='4' lg='5'>
						<p className='about-us'>
							<span>За нас</span>
						</p>
					</Col>
					<Col md='4' lg='2'>
						<div className='logo'></div>
					</Col>
					<Col md='4' lg='5'>
						<p className='contacts'>
							<span>Контакти</span>
						</p>
					</Col>
				</Row>
				<Row className='main-title'>
					<Col md='8' lg='7' className='title-wrapper'>
						<h1>
							Открий нови <br />
							вълнуващи места с нас!
						</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
