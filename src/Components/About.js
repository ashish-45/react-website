import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
          <section className="aboutus" id="about">
                <div className='container'>
                    <h1 className='title text-center'>WHY CHOOSE US</h1>
                    <div className='row'>
                        <div className='col-md-6 about-us'>
                            <p className='about-title'>Why we're different</p>
                            <ul>
                                <li className='content'>Understand our client's business goal first.</li>
                                <li className='content'>we create winning content stratergy.</li>
                                <li className='content'>Belive in doing business with honesty.</li>
                                <li className='content'>Belive in doing business with honesty.</li>
                                <li className='content'>we create winning content stratergy.</li>
                                <li className='content'>Belive in doing business with honesty.</li>
                                <li className='content'>We protect our online reputation.</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <img src="https://image.freepik.com/free-vector/big-data-processing-hosting-server-database-virtual-platform-dark-neon-isometric-concept_88272-2337.jpg"
                            className="cloud"/>
                        </div>
                    </div>
                </div>



          </section>  
        </>
    )
}

export default About;
