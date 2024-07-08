import '../styles/Navbar.css';

export const NavigationBar = ({ activePage }) => {
const handleHomeClick = () => {
    document.getElementById('home').scrollIntoView();
  };
  
  const handleAboutClick = () => {
    document.getElementById('about').scrollIntoView();
  };
  
  const handleProjectsClick = () => {
    document.getElementById('projects').scrollIntoView();
  };
  
  const handleVolunteerClick = () => {
    document.getElementById('volunteer').scrollIntoView();
  };
  
  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView();
  };
  
  return (
    <div className="navbar-component">
      <div className='pages'>
        <ul className='bar'>
          <li className={activePage === 'home' ? 'active' : ''} onClick={handleHomeClick}> Home </li>
          <li className={activePage === 'about' ? 'active' : ''} onClick={handleAboutClick}> About </li>
          <li className={activePage === 'projects' ? 'active' : ''} onClick={handleProjectsClick}> Projects </li>
          {/* <li className={activePage === 'volunteer' ? 'active' : ''} onClick={handleVolunteerClick}> Volunteer </li> */}
          <li className={activePage === 'contact' ? 'active' : ''} onClick={handleContactClick}> Contact </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;