import './App.css';
import About from './features/Components/About/About';
import Home from './features/Components/Home/Home';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Home />
				<About />
			</header>
		</div>
	);
}

export default App;
