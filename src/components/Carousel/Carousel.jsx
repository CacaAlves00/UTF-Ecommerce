import React from 'react'
import CarouselBs from 'react-bootstrap/Carousel'
import './Carousel.css'

function Carousel() {
    
  return (
    <CarouselBs data-bs-theme="dark">
      <CarouselBs.Item>
        <img
          className='carousel-img'
          src={`/imgs/computer.jpg`}
          alt='Computer'
        />
        <CarouselBs.Caption>
          <h3>Computador</h3>
          <p>Compre aqui seu produto de qualidade !</p>
        </CarouselBs.Caption>
      </CarouselBs.Item>
      <CarouselBs.Item>
        <img
          className='carousel-img'
          src={`/imgs/statistics.jpg`}
          alt='Statistics'
        />
        <CarouselBs.Caption>
          <h3>Ambiente personalizado</h3>
          <p>Anuncie AQUI os seus produtos</p>
        </CarouselBs.Caption>
      </CarouselBs.Item>
      <CarouselBs.Item>
        <img
          className='carousel-img'
          src={`/imgs/clothing.jpg`}
          alt='Clothes'
        />
        <CarouselBs.Caption>
          <h3>Roupas</h3>
          <p>Você pode comprar o que quiser aqui ;)</p>
        </CarouselBs.Caption>
      </CarouselBs.Item>
    </CarouselBs>
  )
}

export default Carousel
