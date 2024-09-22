import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <section className="item-sec d-flex justify-content-between m-3 ">
           <div onClick={() => {navigate("/categories?food-grocery")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img1.webp" alt="" />
                    <span>Food & Grocery</span>
                </div>
                <div onClick={() => {navigate("/categories?electronics")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img2.webp" alt="" />
                    <span>Electronics</span>
                </div>
                <div onClick={() => {navigate("/categories?pet-supplies")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img3.webp" alt="" />
                    <span>Pet Supplies</span>
                </div>
                <div onClick={() => {navigate("/categories?travel-and-vacation")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img4.webp" alt="" />
                    <span>Travel & Vacation</span>
                </div>
                <div onClick={() => {navigate("/categories?fashion-and-apparel")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img2.webp" alt="" />
                    <span>Fashion & Apparel</span>
                </div>
                <div onClick={() => {navigate("/categories?home-and-kitchen")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img1.webp" alt="" />
                    <span>Home & Kitchen</span>
                </div>
                <div onClick={() => {navigate("/categories?beauty-and-personal")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img1.webp" alt="" />
                    <span>Beauty & Personal Care</span>
                </div>
                <div onClick={() => {navigate("/categories?health-and-fitness")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img3.webp" alt="" />
                    <span>Health & Fitness</span>
                </div>
                <div onClick={() => {navigate("/categories?books-movies-music")}} className="d-flex flex-column align-items-center pointer-cursor">
                    <img className='nav-image' src="src/assets/images/img2.webp" alt="" />
                    <span>Books, Movies & Music</span>
                </div>
       
        </section>
    );
}

export default Navbar;
