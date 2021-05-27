import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <>
            <section className='banner' id="home">
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='promo-title'>BEST DIGITAL AGENCY</p>
                        <p>subscribe easy tutorial youtube channel to watch more videos on website
                        development, Digital Marketing , Wordpress and Graphics Designing.
                        </p>
                        <div className="play-section">
                            <a href="#">
                                <i class="far fa-play-circle"></i>
                            </a>
                            <span className='watch' style={{fontSize:'35px', fontWeight:'bold'}}> Watch Tutorial</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://thumbs.dreamstime.com/b/lawyer-discussing-clients-judge-consultation-legal-advice-plan-strategy-people-communication-laptop-legislation-163737040.jpg" className="img-fluid" style={{width:'300px', marginTop:'30px'}}/>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Home;
