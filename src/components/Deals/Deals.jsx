import React, { useEffect, useState } from 'react';
import FeaturedDeals from './FeaturedDeals';
import BaseRequest from '../../constant/requests';
import { BASE_URL } from '../../constant/constants';

const deals = [
  {
    "store": "Amazon",
    "product": "Lays",
    "originalPrice": 10,
    "salePrice": 4,
    "discount": 60,
    "expiry": "Feb 28, 2024",
    "notes": "Spicy flavour",
    "image": "src/assets/images/lays.jpg",
    "category": "grocery"
  },
  {
    "store": "Amazon",
    "product": "Kindle Paperwhite",
    "originalPrice": 129.99,
    "salePrice": 99.99,
    "discount": 23,
    "expiry": "Feb 28, 2024",
    "notes": "Waterproof, 8 GB storage",
    "image": "src/assets/images/kindle.jpg",
    "category": "electronics"
  },
  {
    "store": "Best Buy",
    "product": "Apple AirPods Pro",
    "originalPrice": 249.99,
    "salePrice": 199.99,
    "discount": 20,
    "expiry": "Mar 15, 2024",
    "notes": "Noise-cancelling, wireless charging",
    "image": "src/assets/images/airpods.jpg",
    "category": "electronics"
  },
  {
    "store": "Walmart",
    "product": "Nintendo Switch",
    "originalPrice": 299.99,
    "salePrice": 269.99,
    "discount": 10,
    "expiry": "Mar 31, 2024",
    "notes": "Includes Mario Kart 8 Deluxe",
    "image": "src/assets/images/nintendo.jpg",
    "category": "electronics"
  },
  {
    "store": "Newegg",
    "product": "Samsung Galaxy Tab S7",
    "originalPrice": 649.99,
    "salePrice": 549.99,
    "discount": 15,
    "expiry": "Apr 15, 2024",
    "notes": "128GB, includes S Pen",
    "image": "src/assets/images/galaxy_tab.jpg",
    "category": "electronics"
  },
  {
    "store": "Target",
    "product": "Beats by Dre Headphones",
    "originalPrice": 199.99,
    "salePrice": 159.99,
    "discount": 20,
    "expiry": "Apr 30, 2024",
    "notes": "Wireless, noise cancelling",
    "image": "src/assets/images/beats.jpg",
    "category": "electronics"
  }
];

function Deals() {
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('expiry');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(()=>{
    const getAlldeals = async() =>{
      const response = await BaseRequest.get(`${BASE_URL}/deals`, )
      console.log(response)
    }

    getAlldeals()

  },[])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredDeals = deals.filter(deal => {
    if (category === 'all' || deal.category === category) {
      return deal.product.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  const sortedDeals = [...filteredDeals].sort((a, b) => {
    if (sortOption === 'expiry') {
      return new Date(a.expiry) - new Date(b.expiry);
    } else if (sortOption === 'discount') {
      return b.discount - a.discount;
    }
    return 0;
  });

  return (
    <div>
      <div className='d-flex m-4 justify-content-center'>
        <div>
          <select className='p-2 m-2' id="category" value={category} onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="grocery">Grocery</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Travel & Vacation">Travel & Vacation</option>
            <option value="Fashion & Apparel">Fashion & Apparel</option>
            <option value="Beauty & Personal Care">Beauty & Personal Care</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Health & Fitness">Health & Fitness</option>
            <option value="Books, Movies & Music">Books, Movies & Music</option>
          </select>
          <select className='p-2 m-2' id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="expiry">Expiry</option>
            <option value="discount">Discount</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div className="srch">
          <i className="fas fa-search"></i>
          <input
            type="search"
            name="search"
            id="srch"
            placeholder="Search for Offers, Products, Brands and More"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <FeaturedDeals deals={sortedDeals} />
    </div>
  );
}

export default Deals;
