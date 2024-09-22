import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import FeaturedItems from '../components/Featured/FeaturedItems'

const HomePage = () => {
  return (
    <Layout>
       <Banner />
       <FeaturedItems />
    </Layout>
  )
}

export default HomePage