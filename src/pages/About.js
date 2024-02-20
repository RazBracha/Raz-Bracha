import '../styles/About.css';
import Layout from '../comps/Layout';

function About() {

  return (
    <>
      <Layout containerName="about-page-container" activePage="about">
        <div className="about">
          <div className='text-container'>
            <h1 className='heading'> About me </h1>
            <p className='about-section'>My name is Raz Bracha, I'm 24-year-old. <br />
              Technology has always fascinated me, particularly the art of coding and developing innovative solutions. <br />
              I recently completed my Bachelor of Science degree in Computer Science from Academic Tel Aviv Yaffo in October 2023,
              marking a significant milestone in my journey.</p>

            <p className='about-section-bold'>My curiosity drives me to stay updated with the latest in technology, allowing me to explore new opportunities in the ever-changing tech landscape.</p>
          </div>
          <div className='img-container'>
            <img alt='' className='profile-image' src='/pictures/profilePicture.jpg' />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
