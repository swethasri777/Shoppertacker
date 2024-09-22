import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Deals from '../components/Deals/Deals'

const DealsPage = () => {
    return (
        <>
            <Header />
            <div className='d-flex flex-column align-items-center justify-content-center my-3'>
            <h3 className='d-flex justify-content-center my-3'>Deals of the Day
            
            </h3>
          
            </div>
      

            <Deals />
            <Footer />
        </>

    )
}

export default DealsPage