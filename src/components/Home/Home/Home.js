import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Features></Features>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;