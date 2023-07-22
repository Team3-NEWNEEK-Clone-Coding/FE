import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './footer/Footer';
import FooterBanner from './footerBanner/FooterBanner';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <FooterBanner />
            <Footer />
        </>
    );
};

export default Layout;
