import React from 'react'
import './Products.css'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import items from './../../data/items.json'

function Products() {
  return (
    <article className='page'>
      <Header />

      <section className='highlights'>
        <h2>Produtos</h2>

        <div className='products-page-products'>
          {items.map((item) => (
            <Product key={item.key} {...item} />
          ))}
        </div>
      </section>
    </article>
  )
}

export default Products
