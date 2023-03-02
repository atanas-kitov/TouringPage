import './App.css';
import About from './features/Components/About/About';
import Gallery from './features/Components/Gallery/Gallery';
import Home from './features/Components/Home/Home';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Home />
				<About />
				<Gallery />
			</header>
		</div>
	);
}

export default App;
