import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar({ activePage }) {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleVolunteerClick = () => {
    navigate('/volunteer');
  };


  return (
    <div className="navbar-component">
      <div className='pages'>
        <ul className='bar'>
          <li className={activePage === 'home' ? 'active' : ''} onClick={handleHomeClick}> Home </li>
          <li className={activePage === 'about' ? 'active' : ''} onClick={handleAboutClick}> About </li>
          <li className={activePage === 'projects' ? 'active' : ''} onClick={handleProjectsClick}> Projects </li>
          <li className={activePage === 'volunteer' ? 'active' : ''} onClick={handleVolunteerClick}> Volunteer </li>
        </ul>
      </div>
      <div className='contact-button'>
        <button className='contact-me-button' onClick={handleContactClick}>Contact me</button>
      </div>
    </div>
  );
}

export default Navbar;
