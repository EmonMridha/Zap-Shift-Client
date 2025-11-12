import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Features from '../Features/Features';
import Merchant from '../Merchant/Merchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Features></Features>
            <Merchant></Merchant>
        </div>
    );
};

export default Home;