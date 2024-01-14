import ContactInfo from '../comps/ContactInfo';
import Navbar from '../comps/Navbar';
import '../styles/ContactInfo.css';

function Contact() {
    return (
        <>
            <div className='body'>
                <Navbar />
                <ContactInfo />
            </div>
        </>
    )
}

export default Contact;