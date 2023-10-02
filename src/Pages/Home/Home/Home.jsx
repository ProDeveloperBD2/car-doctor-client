import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='mt-14'>
                <About></About>
            </div>
            <div className='mt-20'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;