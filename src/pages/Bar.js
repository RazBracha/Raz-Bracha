import './Bar.css';
import { useNavigate } from 'react-router-dom';


function Bar() {

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

  return (
    <>
      <div className="Projects">
        <ul className='bar'>
          <li onClick={handleHomeClick}> Home </li>
          <li onClick={handleAboutClick}> About </li>
          <li onClick={handleProjectsClick}> Projects </li>
        </ul>
      </div>
    </>
  );
}

export default Bar;
