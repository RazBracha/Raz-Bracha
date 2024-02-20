import Navbar from "./Navbar";
import '../styles/HomePage.css';
import '../styles/About.css';
import '../styles/ContactInfo.css';

function Layout({ children, containerName, activePage }) {

    return (
        <div className={containerName}>
            <Navbar activePage={activePage} />
            {children}
        </div>
    )
}
export default Layout;