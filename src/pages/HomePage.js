import '../styles/HomePage.css';
import Layout from '../comps/Layout'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import TechStack from '../pages/TechStack'
import Footer from '../comps/Footer'

function HomePage() {
  return (
    <>
      <Layout containerName="home-page-container" activePage="home">
        <div id="home" className='home-items-container'>
          <div className='home-text-container'>
            <p className='title'>Raz Bracha</p>
            <p className='sub-title'>Full Stack Engineer</p>
            <p className='mid-section'>I bring <span className='mid-section--color'>ideas to life</span> through code.</p>
            <p className='last-section'>Passionate about developing innovative solutions, <br />
              I love to explore new technologies and driven by the thrill of coding.</p>
          </div>
        </div>
        <About id="about" />
        <TechStack id="techstack" />
        <Portfolio id="portfolio" />
        < Footer />
      </Layout>
    </>
  );
}

export default HomePage;
