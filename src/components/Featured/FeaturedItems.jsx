import React, { useState, useEffect } from 'react';

import { data } from '../../data/Categories/Categories';

const FeaturedItems = () => {
    const [featuredItems, setFeaturedItems] = useState([]);

    const getRandomItems = () => {
        const shuffledData = data.sort(() => 0.5 - Math.random());
        const selectedItems = shuffledData.slice(0, 4);
        setFeaturedItems(selectedItems);
    };

    useEffect(() => {
        getRandomItems();
    }, []);

    return (
        <section className="best-item m-2 mb-5">
            <h3 className='w-100 d-flex justify-content-center my-5 fw-bold'>Featured</h3>
            <div className="box-card mx-3 d-flex justify-content-between">
                {featuredItems.map(item => (
                    <div className="deal card">
                        <img height={226} src={item.image} alt={item.name} />
                        <div className="text my-3 d-flex justify-content-center align-items-center">
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedItems;
