import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>This is Automated Deploy System</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					This is From Codepipeline!!! it is Cool to deploy using
					CI/CD !!
				</a>
			</header>
		</div>
	);
}

export default App;
