import Layout from '../comps/Layout';
import '../styles/Volunteer.css'

function Volunteer() {

    return (
        <>
            <Layout containerName="volunteer-page-container" activePage="volunteer">
                <div className="volunteer-page">
                    <section className='Hackathon'>
                        <h1>Hackathon</h1>
                        <div className='head-mini'>
                            <p className='date'>BeSafe, </p>
                            <p className='companies'>QueenB & AppsFlyer</p></div>
                        <p className='description'>Participated in a hackathon aimed at developing technological solutions to promote safe internet practices.
                            Created a web application using Next.js, integrating ChatGPT for assisting instructors in identifying weak points
                            and designing tailored lesson plans for specific classes.</p>

                    </section>
                </div>
            </Layout>
        </>
    );
}

export default Volunteer;
