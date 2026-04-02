import React from 'react';
import '../../assets/css/product.css';
import "../../assets/css/home.css";

function Hero() {
    return ( 
        <>
        <div className="container text-center p-5">
            <h2 className='mt-md-5 mt-2'>Zerodha Products</h2>
            <h4 className='mt-3 text-muted font-7'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='products-hero-para mobile-para-invest text-muted para-fontsize-mobile'>Check out our <span>investment offerings →</span></p>
        </div>
        <div className="container">
                <div className="row p-md-5 p-3 border-top mt-5"></div>
        </div>
        </>
     );
}

export default Hero;