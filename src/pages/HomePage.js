import "../styles/HomePage.css";
import Layout from "../comps/Layout";
import Portfolio from "./Projects";
import TechStack from "../pages/TechStack";
import Footer from "../comps/Footer";
import StyledButton from "../comps/StyledButton";
import Experience from "../pages/Experience";

function HomePage() {
  const handleContactClick = () => {
    document.getElementById("contact").scrollIntoView();
  };
  return (
    <>
      <Layout containerName="home-page-container" activePage="home">
        <div id="home" className="home-items-container">
          <div className="home-text-container">
            <img alt="" className="avatar-pic" src="/pictures/avatar.png" />
            <p className="mid-section">
              I bring <span className="mid-section--color">ideas to life</span>{" "}
              <br />
              through code.
            </p>
            <p className="last-section">
              {" "}
              Full Stack Developer with experience in Frontend development,{" "}
              <br />
              passionate about creating innovative solutions. <br />
              Driven by the thrill of coding and a love for exploring new
              technologies.
            </p>
            <div className="button">
              <StyledButton variant="white" onClick={handleContactClick}>
                Get In Touch
              </StyledButton>
              <StyledButton
                as="a"
                href="/files/Raz_Bracha_Full_Stack_Engineer.pdf"
                variant="transparent"
                download
              >
                Download CV
              </StyledButton>
            </div>
          </div>
        </div>
        <TechStack id="techstack" />
        <Experience id="Experience" />
        <Portfolio id="portfolio" />
        <Footer />
      </Layout>
    </>
  );
}

export default HomePage;
