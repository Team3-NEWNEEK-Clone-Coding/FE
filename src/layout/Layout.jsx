import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './footer/Footer';
import SubscribeFooterBanner from './subscribeFooterBanner/SubscribeFooterBanner';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SubscribeFooterBanner />
            <Footer />
        </>
    );
};

export default Layout;
