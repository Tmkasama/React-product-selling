import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { useState } from 'react'
import Orders from './Orders'

const showOrders = (props) => {
  let totalPrice = 0
  props.orders.forEach((el) => (totalPrice += Number.parseFloat(el.price)))

  return (
    <div>
      {props.orders.map((el) => (
        <Orders key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p>Нийт үнийн дүн : {new Intl.NumberFormat().format(totalPrice)} ₮</p>
    </div>
  )
}
const showNothing = () => {
  return (
    <div>
      <h2>Сагс хоосон байна</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className="logo">Гэрийн тавилгууд</span>
        <ul className="nav">
          <li>Бидний тухай</li>
          <li>Холбоо барих</li>
          <li>Кабинет</li>
        </ul>
        <FaBasketShopping
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
      </div>
      {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  )
}
