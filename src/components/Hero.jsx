import React, { useState, useEffect } from 'react';
import facebook from '../image/fb.png'
import instagram from '../image/ig.png'
import twitter from '../image/x.png'
import linkedIn from '../image/in.png'
import CardCarousel from './CardCarousel.jsx';
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Set initial index to center card

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Hardcoded to 3 cards
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Hardcoded to 3 cards
    };
    return (
        <>
            <div className="wrapper">
                <header>
                    <div className="header-container">
                        <div className="header-heading">
                            <div className='flex'>
                                <h2 style={{ display: 'flex', fontSize: '1.6rem' }}>
                                    <img src='https://static.vecteezy.com/system/resources/previews/025/018/739/non_2x/mountain-illustration-outdoor-adventure-for-t-shirt-and-apparel-design-typography-print-logo-generative-ai-png.png' width={40}></img>
                                    &nbsp;
                                    Genius System Logix</h2>
                                <span className='small-logo-span'>Crafting Digital Excellence</span>
                            </div>
                        </div>
                        <div className="nav-bar">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </div>
                        <div className="nav-btn">
                            <button className="reg-btn">Contact Us</button>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="main-section">
                        <div className="rs-content">
                            <h1>Welcome To <br></br>The Genius Logix.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur.<br></br> Ipsa vel pariatur accusamus, cumque at</p>
                            <button className="reg-btn btn-hero">Lets Talk</button>
                        </div>
                    </div>
                </main>
                <div className='social-position'>
                    <img src={facebook} alt="Facebook Icon" />
                    <img src={twitter} alt="Twitter Icon" />
                    <img src={instagram} alt="Instagram Icon" />
                    <img src={linkedIn} alt="LinkedIn Icon" />

                    {/* Add more social icons as needed */}
                </div>
                <div className='position-btn'>
                    <button className="prev-btn" onClick={prevCard} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>&lt;</button>
                    <button className="next-btn" onClick={nextCard} style={{ display: currentIndex === 2 ? 'none' : 'block' }}>&gt;</button>
                </div>
                <div className="card-carousel-container">
                    <div className="card-slide">
                        <div className={`card ${currentIndex === 0 ? 'active' : ''}`}>
                        <img style={{margin:'auto'}} src='https://static.vecteezy.com/system/resources/previews/023/569/568/non_2x/one-single-line-drawing-of-whole-healthy-organic-blueberries-for-orchard-logo-identity-fresh-blue-berry-fruitage-concept-for-fruit-garden-icon-modern-continuous-line-draw-design-vector-illustration-png.png' width={150}></img>

                            <h2>Card 1</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className={`card ${currentIndex === 1 ? 'active' : ''}`}>
                        <img src='https://static.vecteezy.com/system/resources/previews/010/789/705/non_2x/vintage-retro-logo-for-banner-png.png' style={{margin:'auto'}} width={150}></img>

                            <h2>Card 2</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                        <div className={`card ${currentIndex === 2 ? 'active' : ''}`}>
                            <img style={{margin:'auto'}} src='https://static.vecteezy.com/system/resources/previews/023/569/568/non_2x/one-single-line-drawing-of-whole-healthy-organic-blueberries-for-orchard-logo-identity-fresh-blue-berry-fruitage-concept-for-fruit-garden-icon-modern-continuous-line-draw-design-vector-illustration-png.png' width={150}></img>
                            <h2>Card 3</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
