import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

import avatar from './images/avatar.svg';
import devices from './images/devices.svg';


const Home = () => {
    return(
        <>
            <Header />

            <section className='showcase-wrapper'>
                <div className='container'>
                    
                </div>
            </section>

            <About />
            <Projects />
            <Footer />
        </>
    )
}
export default Home;