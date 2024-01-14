import '../styles/About.css';
import Navbar from '../comps/Navbar';

function About() {

  return (
    <>
      <div className='body'>
        <Navbar />
        <div className="about">
          <div className='text-container'>
            <h1 className='heading'> About me </h1>
            <p className='about-section'>My name is Raz Bracha, I'm a 24-year-old from the city of Holon. <br />
              Technology has always fascinated me, particularly the art of coding and developing innovative solutions. <br />
              I recently completed my Bachelor of Science degree in Computer Science from Academic Tel Aviv Yaffo in October 2023,
              marking a significant milestone in my journey.</p>

            <p className='about-section-bold'>My curiosity drives me to stay updated with the latest in technology, allowing me to explore new opportunities in the ever-changing tech landscape.</p>
          </div>
          <div className='container'>
            <img alt='' className='profile-image' src='/pictures/profilePicture.jpg' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
