import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Gallery.scss';

const Gallery = () => {
	return (
		<div className='gallery-wrapper'>
			<Container>
				<Row>
					<Col>
						<h2>Галерия</h2>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Gallery;
