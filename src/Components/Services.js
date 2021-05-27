import React from 'react';
import "./Services.css";

const Services = () => {
    return (
      <>
        <section className='services' id="services">
            <div className='container'>
                <h1 className='title text-center'>WHAT WE DO ?</h1>
                <div className="row ml-4">
                    <div className='col-md-4 services1'>
                        <img src="https://smallimg.pngkey.com/png/small/1-10960_download-arrow-svg-downloads-download-for-clip-art.png" className="services-img ml-4"/>
                        <h4>Website Development</h4>
                        <p>subscribe easy tutorial youtube channel to watch more videos on website
                        development, Digital Marketing , Wordpress and Graphics Designing.
                        </p>
                    </div>
                    <div className='col-md-4 services1'>
                        <img src="https://smallimg.pngkey.com/png/small/1-10960_download-arrow-svg-downloads-download-for-clip-art.png" className="services-img ml-4"/>
                        <h4>Graphics Designing</h4>
                        <p>subscribe easy tutorial youtube channel to watch more videos on website
                        development, Digital Marketing , Wordpress and Graphics Designing.
                        </p>
                    </div>
                    <div className='col-md-4 services1'>
                        <img src="https://smallimg.pngkey.com/png/small/1-10960_download-arrow-svg-downloads-download-for-clip-art.png" className="services-img ml-4"/>
                        <h4>Digital Marketing</h4>
                        <p>subscribe easy tutorial youtube channel to watch more videos on website
                        development, Digital Marketing , Wordpress and Graphics Designing.
                        </p>
                    </div>
                </div>
                <button type="button" className='btn btn-primary ml-5 text-center'>All Services</button>
            </div>
        </section>
      </>
    )
}

export default Services;
