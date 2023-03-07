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
			background: './slider2-1.jpg',
			time: 3,
			price: 60,
		},
		{
			activity: 'Обиколка на',
			location: 'Градска художествена галерия',
			background: './slider2-2.jpg',
			time: 1,
			price: 30,
		},
		{
			activity: 'Обиколка на',
			location: 'Римски терми',
			background: './slider2-3.jpg',
			time: 2,
			price: 40,
		},
		{
			activity: 'Екскурзия до',
			location: 'Аладжа манастир',
			background: './slider2-4.jpg',
			time: 3,
			price: 60,
		},
		{
			activity: 'Обиколка на',
			location: 'Резиденция евксиноград',
			background: './slider2-5.jpg',
			time: 3,
			price: 90,
		},
		{
			activity: 'Обиколка на',
			location: 'Музей на куклата',
			background: './slider2-6.jpg',
			time: 2,
			price: 40,
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
