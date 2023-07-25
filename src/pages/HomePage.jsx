import '../styles/HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {

	return (
		<div className='home page'>
			<div className="home__header">
				<h1 className='home__h1'>Users APP</h1>
				<p>Developed with my own api</p>
			</div>
			<div className="home__buttons">
				<button className='home__button login' >
					<Link to="/login" >Log in</Link>
				</button>
			</div>
		</div>
	)
};

export default HomePage;