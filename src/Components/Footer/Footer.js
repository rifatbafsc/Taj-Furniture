import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer >
                         
                <div className="row mt-3 bg-black text-color2 footer-responsive">
                    
                <div className="col-6 ">
                    <h4>Taj furniture</h4>
                    <h5>All kind of furniture available </h5>
                </div>
                <div className="col-6">
                    <h5>Dhaka office</h5>
                    <p>Address: Mirpur-12</p>
                    <p>Phone Number: +880130****81</p>
                    
                    
                    
                    </div>
                    <hr />
                    <p className='text-center'>Copyright © 2022. All right reserved to Taj furniture</p>
                </div>
                
                         
            </footer>
        </div>
    );
};

export default Footer;