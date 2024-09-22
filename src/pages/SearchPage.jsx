import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { data } from '../data/Categories/Categories';
import CategoryCard from '../components/Categories/CategoryCard';

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchItem = searchParams.get('searchitem');
   
     const filteredItems = data.filter(item =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.description.toLowerCase().includes(searchItem.toLowerCase())
    );
    
    return (
        <Layout>
            <h3 className='my-5 text-center'>The items related to "{searchItem}" are listed in this page</h3>
            <div className='deals-container d-flex'>
                {filteredItems.map((product, index) => (
                    <CategoryCard product={product} index={index} />
                ))}
                </div>
 
        </Layout>
    );
};

export default SearchPage;
