import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../Openaccount';

function HomePage() {
    return ( 
        <>
        <Hero></Hero> 
        <Awards></Awards>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <Openaccount></Openaccount>
        </>
     );
}

export default HomePage;