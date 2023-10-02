import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Footer/Footer';
import NavBar from '../Pages/Shered/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;