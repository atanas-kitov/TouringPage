import React from 'react';
import './Home.scss';
import HeroImage from '../HeroImage/HeroImage';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
	const galleryBackgrounds = [
		{ background: '../../../../public/slider1-1.jpg', id: 1 },
		{ background: '../../../../public/slider1-2.jpg', id: 2 },
		{ background: '../../../../public/slider1-3.jpg', id: 3 },
		{ background: '../../../../public/slider1-1.jpg', id: 4 },
	];
	return (
		<>
			<HeroImage />
			<About />
			<Gallery galleryBackgrounds={galleryBackgrounds} />
			<ContactUs />
		</>
	);
};

export default Home;
