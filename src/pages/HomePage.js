import '../styles/HomePage.css';
import Layout from '../comps/Layout'

function HomePage() {
  return (
    <>
      <Layout containerName="home-page-container" activePage="home">
        <div className='home-items-container'>
          <div className='home-text-container'>
            <p className='title'>Hey, i am Raz</p>
            <p className='mid-section'>I bring <span className='mid-section--color'>ideas to life</span> <br />through code.</p>
            <p className='last-section'>Passionate about developing innovative solutions, <br />
              I love to explore new technologies and driven by the thrill of coding.</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
