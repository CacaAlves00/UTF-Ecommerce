import React from 'react'
import items from './../../data/items.json'
import './HighlightProducts.css'
import Product from '../Product/Product'

function HighlightProducts() {
  return (
    <section className='highlights'>
      <h2>Destaques</h2>

      <div className='products'>
        {items.slice(0, 2).map((item) => (
          <Product key={item.key} {...item}/>
        ))}
      </div>
    </section>
  )
}

export default HighlightProducts
