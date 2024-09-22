import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME, DEALS, CART, SIGN_IN } from '../../constant/routes';
import { CartContext } from '../../context/CartContext';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?searchitem=${searchTerm}`);
        }
    };

    return (
        <header className="header d-flex justify-content-around">
            <div className="m-3 pointer-cursor" onClick={() => navigate(HOME.INDEX)}>
                <img width="170px" src="src/assets/images/title.png" alt="Logo" />
            </div>
            <form onSubmit={handleSearch} className="srch">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="search"
                    name="search"
                    id="srch"
                    placeholder="Search for Offers, Products, Brands and More"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <div className="d-flex">
                <div className="Home pointer-cursor mx-3 d-flex align-items-center" onClick={() => navigate(HOME.INDEX)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className='ms-2'>Home</span>
                </div>
                <div onClick={() => navigate(SIGN_IN.INDEX)} className="Login pointer-cursor mx-3 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <span className='ms-2'>Login</span>
                </div>
                <div onClick={() => navigate(CART.INDEX)} className="cart pointer-cursor mx-3 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <span className='ms-2' data-count={cartItems.length}>Cart</span>

                </div>
                <div className="Deals pointer-cursor mx-3 d-flex align-items-center" onClick={() => navigate(DEALS.INDEX)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg>
                    <span className='ms-2'>Deals</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
