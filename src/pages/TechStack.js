import '../styles/TechStack.css' 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const TechStack = () => {
    return (
        <div className='TechStack' >
        <div className='TechStack-container' data-aos="fade-down" data-aos-duration="1000"> 
            {/* <h1 className='header'>Technologies & Projects</h1> */}
            <ul className='technologies'>
                <li>
                    <img className="tech-icon" src="/pictures/javascript.svg" alt="JavaScript" />
                    <p>JavaScript</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/react.svg" alt="React" />
                    <p>React</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/nodejs.svg" alt="NodeJS" />
                    <p>NodeJS</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/python.svg" alt="Python" />
                    <p>Python</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/csharp.svg" alt="CSharp" />
                    <p>C#</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/mongodb.svg" alt="mongoDB" />
                    <p>MongoDB</p>
                </li>
                <li>
                    <img className="tech-icon" src="/pictures/firebase.svg" alt="Firebase" />
                    <p>Firebase</p>
                </li>
            </ul>
            
        </div>
         </div>
    );
}

export default TechStack;