import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import HighlightProducts from '../../components/HighlightProducts/HighlightProducts'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <article className='page'>
      <Header />
      <Carousel />
      <HighlightProducts />
      <Footer />
    </article>
  )
}

export default Home
