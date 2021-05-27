import React from 'react';
import "./Footer2.css";
import wave1 from '../img/wave1.png';

const Footer2 = () => {
    return (
        <>
          <section className='footer2'>
              {/* <img src={wave1} style={{width:'100%', height:'200px'}}/> */}
              <div className='container'>
                  <div className='row'>
                        <div className='col-md-4 footer-box'>
                            <img src="https://www.abc27.com/wp-content/uploads/sites/55/2020/04/doodle.png?w=640" style={{width:'80px'}}/>
                            <p>subscribe easy tutorial youtube channel to watch more videos on website
                              development, Digital Marketing , Wordpress and Graphics Designing. press the bell icon to get notification
                             </p>
                        </div>
                        <div className='col-md-4 footer-box'>
                            <p><b>CONTACT US</b></p>
                            <p><i class="fal fa-map-marker-alt"></i> World Trade center, Mumbai</p>
                            <p><i class="far fa-phone-alt"></i> +1 0123456789</p>
                            <p><i class="far fa-envelope"></i> xyz@gmail.com</p>
                        </div>
                        <div className='col-md-4 footer-box'>
                            <p><b>SUBSCRIBE NEWSLETTER</b></p>
                            <input type="email" className='form-control ml-2' placeholder="Your Email" />
                            <button type="button" className='btn btn-primary'>SUBSCRIBE</button>
                        </div>
                  </div>
              </div>
              <hr/>
              <p className="copyright">Website created by &copy; Ashish Nirvikar in 2021</p>
          </section>  
        </>
    )
}

export default Footer2;
