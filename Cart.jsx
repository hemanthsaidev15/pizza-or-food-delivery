// CartPage.js

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((item)=>item.name.cart);
  const dispatch = useDispatch();
  console.log(cartItems)
  let [sumquantity , setSumquantity] = useState(0)
  let [total, setTotal] = useState(0)
  useEffect(()=>{
    cartItems.map((value)=>{
      setSumquantity(sumquantity+=value.quantity)
      setTotal(total+=value.price)
    })
    console.log(total)
  },[])
  return (
    <>
    <h2>TOTAL PRICE:{total}</h2>
    <h2>TOTAL QUANTITY:{sumquantity}</h2>
    <div className='main'>
      
      {cartItems.map((item) => {
            return (
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Title>
            ₹{item.price}
            </Card.Title>
            <Button>quantity:{item.quantity}</Button>  
            <Button variant="primary" onClick={() => dispatch(removeFromCart(item))}>{"Remove"}</Button>
          </Card.Body>
        </Card>
            )
        })}
    </div>
    </>
  );
};

export default CartPage;
