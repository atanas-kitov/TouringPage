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
		{ background: './slider1-1.jpg', id: 101 },
		{ background: './slider1-2.jpg', id: 102 },
		{ background: './slider1-3.jpg', id: 103 },
		{ background: './slider2-1.jpg', id: 104 },
	];

	const services = [
		{
			activity: 'Екскурзия до',
			location: 'Побити камъни',
			background: './slider2-1.jpg',
			time: 3,
			price: 60,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 201,
		},
		{
			activity: 'Обиколка на',
			location: 'Градска художествена галерия',
			background: './slider2-2.jpg',
			time: 1,
			price: 30,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 202,
		},
		{
			activity: 'Обиколка на',
			location: 'Римски терми',
			background: './slider2-3.jpg',
			time: 2,
			price: 40,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 203,
		},
		{
			activity: 'Екскурзия до',
			location: 'Аладжа манастир',
			background: './slider2-4.jpg',
			time: 3,
			price: 60,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 204,
		},
		{
			activity: 'Обиколка на',
			location: 'Резиденция евксиноград',
			background: './slider2-5.jpg',
			time: 3,
			price: 90,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 205,
		},
		{
			activity: 'Обиколка на',
			location: 'Музей на куклата',
			background: './slider2-6.jpg',
			time: 2,
			price: 40,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
			id: 206,
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
