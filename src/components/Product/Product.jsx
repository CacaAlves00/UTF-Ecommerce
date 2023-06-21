import React, { useContext } from 'react'
import './Product.css'
import formatCurrency from './../../utils/formatCurrency'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'

function Product({ id, name, price, imgUrl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
  } = useShoppingCart()

  return (
    <Card className='product'>
      <Card.Img variant='top' src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{formatCurrency(price)}</Card.Text>
        <div className='buttons'>
          {getItemQuantity(id) > 0 && (
            <>
              <Button
                onClick={() => decreaseCartQuantity(id)}
                variant='primary'
              >
                -
              </Button>
              {getItemQuantity(id)}
            </>
          )}

          <Button onClick={() => increaseCartQuantity(id)} variant='primary'>
            +
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
