import './asset/css/Lipon.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Home from './pages/Home';
AOS.init({
	offset: 60, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
});

function App() {
	return (
		<div className='App'>
			<Home></Home>
		</div>
	);
}

export default App;
