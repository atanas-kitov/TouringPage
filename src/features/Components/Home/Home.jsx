import React from 'react';
import './Home.scss';
import HeroImage from '../HeroImage/HeroImage';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
	const galleryBackgrounds = [
		{ background: './slider1-1.jpg', id: 1 },
		{ background: './slider1-2.jpg', id: 2 },
		{ background: './slider1-3.jpg', id: 3 },
		{ background: './slider2-1.jpg', id: 4 },
	];

	const services = [
		{
			activity: 'Екскурзия до',
			location: 'Побити камъни',
		},
	];
	return (
		<>
			<HeroImage />
			<About />
			<Gallery galleryBackgrounds={galleryBackgrounds} />
			<Services services={services} />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Home;
