import { NavLink } from 'react-router-dom';
import { useTrips } from '../context/TripContext';
import './Navbar.css';

function Navbar() {
  const { darkMode, setDarkMode } = useTrips();

  return (
    <nav className='navbar'>
      <div className='navbar-inner'>
        <NavLink to='/' className='navbar-logo'>
          <div className='logo-badge'>✈</div>
          <div className='logo-text-wrap'>
            <span className='logo-text'>Running<span>Stars</span></span>
            <span className='logo-tagline'>Travel Smart</span>
          </div>
        </NavLink>

        <div className='navbar-divider'></div>

        <div className='navbar-links'>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            <span className='nav-icon'>🏠</span>
            <span>Home</span>
          </NavLink>
          <NavLink
            to='/explore'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <span className='nav-icon'>🧭</span>
            <span>Explore</span>
          </NavLink>
          <NavLink
            to='/planner'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <span className='nav-icon'>📅</span>
            <span>Planner</span>
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <span className='nav-icon'>📊</span>
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className='navbar-footer'>
          <button
            className='dark-toggle'
            onClick={() => setDarkMode(!darkMode)}
            title='Toggle dark mode'
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <p className='navbar-version'>v 1.0</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
