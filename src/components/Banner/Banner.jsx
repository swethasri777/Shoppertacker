import React from 'react';

const Banner = () => {
    return (
        <section className="hero-img">
            <div className="img-container">
                <img className="banner-image" src="src/assets/images/HotSale.png" alt="Hot sale banner" />
            </div>
            <div className="privius">
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="next">
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </section>
    );
}

export default Banner;
