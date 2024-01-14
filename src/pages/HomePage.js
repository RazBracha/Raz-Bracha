import Navbar from '../comps/Navbar';
import '../styles/HomePage.css';


function HomePage() {


  return (
    <>
      <div className="homePage">
        <Navbar />
        <h1 className="header">
          Hi. I`m Raz. <br /> A Developer.
        </h1>

        <h2 className='subHeader'>I am passionate about technology and development.<br />
          Driven by the thrill of coding,
          and exploring emerging tech`s potential.
        </h2>

      </div>
    </>
  );
}

export default HomePage;
