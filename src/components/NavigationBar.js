import '../styles/Navbar.css';

export const NavigationBar = ({ activePage }) => {
const handleHomeClick = () => {
    document.getElementById('home').scrollIntoView();
  };
  
  const handleProjectsClick = () => {
    document.getElementById('projects').scrollIntoView();
  };
  
  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView();
  };

  const handleExperienceClick = () => {
    document.getElementById('experience').scrollIntoView();
  };
  
  return (
    <div className="navbar-component">
      <div className='sing'>
        <div className='pages'>
          <h1 className='name'>Raz Bracha</h1>
        <ul className='bar'>        
          
          <li className={activePage === 'home' ? 'active' : ''} onClick={handleHomeClick}> Home </li>
          {/* <li className={activePage === 'about' ? 'active' : ''} onClick={handleAboutClick}> About </li> */}
          <li className={activePage === 'experience' ? 'active' : ''} onClick={handleExperienceClick}> Experience </li>
          <li className={activePage === 'projects' ? 'active' : ''} onClick={handleProjectsClick}> Projects </li>
          {/* <li className={activePage === 'volunteer' ? 'active' : ''} onClick={handleVolunteerClick}> Volunteer </li> */}
          <li className={activePage === 'contact' ? 'active' : ''} onClick={handleContactClick}> Contact </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;