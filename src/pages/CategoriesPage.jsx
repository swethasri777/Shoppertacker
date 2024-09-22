import React from 'react'
import { useLocation } from 'react-router-dom';

import Layout from '../components/Layout/Layout'
import { data } from '../data/Categories/Categories';
import CategoryCard from '../components/Categories/CategoryCard';


const CategoriesPage = () => {
    const location = useLocation()
    const categorySelected = location.search.split("?")[1]

    const filteredData = data.filter(item => item.category === categorySelected);

    return (
        <Layout>
            <div className='d-flex flex-column'>
                <h4 className='text-center fw-bold my-4'>{filteredData[0].categoryName}</h4>
                <div className='deals-container d-flex flex-wrap'>
                {filteredData.map((product, index) => (
                    <CategoryCard product={product} index={index} />
                ))}
                </div>
            
            </div>
        </Layout>
    )
}

export default CategoriesPage