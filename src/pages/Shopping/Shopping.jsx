import React from 'react'
import './Shopping.css'
import Header from '../../components/Header/Header'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import data from './../../data/items.json'
import formatCurrency from '../../utils/formatCurrency'
import { Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Shopping() {
  const { cartItems, cartQuantity } = useShoppingCart()

  function getTotalPrice() {
    const price = cartItems.reduce((acc, item) => {
      const itemPrice = data.find((datum) => datum.id === item.id).price

      return item.quantity * itemPrice + acc
    }, 0)

    return price
  }

  return (
    <article className='page' id='shopping'>
      <Header />

      <section>
        {cartQuantity === 0 ? (
          <h2>Sem itens no carrinho</h2>
        ) : (
          <>
            <Badge bg='primary'>
              <h2>
                {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'} -{' '}
                {formatCurrency(getTotalPrice())}
              </h2>
            </Badge>

            <Link to='/register'>
              <Button variant='success'>Terminar compra</Button>
            </Link>
          </>
        )}
      </section>
    </article>
  )
}

export default Shopping
