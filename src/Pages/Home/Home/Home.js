import React from 'react';
import Navigation from '../../Shared/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Rates from '../Rates/Rates';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Rates></Rates>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;