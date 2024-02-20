import ContactInfo from '../comps/ContactInfo';
import Layout from '../comps/Layout';
import '../styles/ContactInfo.css';

function Contact() {
    return (
        <>
            <Layout containerName="contact-page-container" activePage="contact">
                <ContactInfo />
            </Layout>

        </>
    )
}

export default Contact;