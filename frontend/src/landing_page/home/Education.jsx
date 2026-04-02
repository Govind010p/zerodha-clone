import React from 'react';
import '../../assets/css/home.css';

function Education() {
    return ( 
        <div className='container p-md-5 mt-md-2 mt-5 px-md-4 px-3'>
            <div className="row p-md-2 p-4 mx-md-0 mx-1 mobile-bordered">
                <div className="col-md-5 col-12 order-2 order-md-0 py-md-0 py-5">
                    <img className='mobile-image-size ' src="/media/images/education.svg" alt="education-image" />
                </div>
                <div className="col-md-2 col-0 "></div>
                <div className="col-md-5 col-12 mt-4 order-0 order-md-2">
                    <h2 className='mb-3'>Free and open market education</h2>
                    <p className='ms-0 para-fontsize-mobile'>Varsity, the largest online stock market education book in the world conering everithing from the basics to advanced trading </p>
                    <a className='para-fontsize-mobile' style={{textDecoration : "none"}} href="">Versity &nbsp;<i class="fa fa-long-arrow-right text-primary" aria-hidden="true"></i></a>
                    <p className="mt-md-5 mt-5 ms-0 para-fontsize-mobile">Trading Q&A, the most active trading and investment market related queries</p>
                    <a className='para-fontsize-mobile' style={{textDecoration : "none"}} href="">Trading Q&A &nbsp;<i class="fa fa-long-arrow-right  text-primary" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>
     );
}

export default Education;