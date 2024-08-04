import Navbar from "./Navbar";
import '../styles/HomePage.css';
import Navigationbar from "./NavigationBar";

function Layout({ children, containerName, activePage }) {

    return (
        <div className={containerName}>
            <Navigationbar activePage={activePage} />
            {children}
        </div>
    )
}
export default Layout;