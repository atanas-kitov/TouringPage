import './App.css';
import ContactUs from './features/Components/ContactUs/ContactUs';
import Footer from './features/Components/Footer/Footer';
import HeroImage from './features/Components/HeroImage/HeroImage';
import Layout from './features/Components/Layout';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<HeroImage />
				<Layout />
				<ContactUs />
				<Footer />
			</header>
		</div>
	);
}

export default App;
