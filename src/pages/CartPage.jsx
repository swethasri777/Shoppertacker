import React, { useContext } from 'react'

import Layout from '../components/Layout/Layout'
import CategoryCard from '../components/Categories/CategoryCard';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <Layout>
            <div className='d-flex flex-column'>
                <h3 className='text-center my-4 mb-5'>Your cart</h3>
                <div className='deals-container d-flex flex-wrap'>
                    {cartItems.length == 0 ? <div className='my-5 py-5 d-flex w-100 justify-content-center'> Oops.... Your cart is empty. </div> : ""}
                    {cartItems.map((product, index) => (
                        <CategoryCard product={product} index={index} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default CartPage