import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Slider from '../Slider/Slider';
import './Gallery.scss';

const Gallery = ({ galleryBackgrounds }) => {
	return (
		<div className='gallery-wrapper'>
			<Container>
				<Row>
					<Col>
						<h2>Галерия</h2>
						<Slider galleryBackgrounds={galleryBackgrounds} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Gallery;
