import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleProjectsClick = () => {
    navigate('/projects');
  }

  const handleContactClick = () => {
    navigate('/contact');
  }

  return (
    <>
      <div className="Projects">
        <ul className='bar'>
          <li onClick={handleHomeClick}> Home </li>
          <li onClick={handleAboutClick}> About </li>
          <li onClick={handleProjectsClick}> Projects </li>
          <li onClick={handleContactClick}> Contact </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
