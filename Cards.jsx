import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
function Cards (props) {
  const [cartCount, setCartCount] = useState(0);
  const [itemsAddedtoCart, setItemsAddedToCart] = useState([]);
  const dispatch = useDispatch()

    return (
        <>
          {props.items.map((item) => {
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
            <Button variant="primary" onClick={() => dispatch(addToCart(item))}>{"Add to cart"}</Button>
          </Card.Body>
        </Card>
            )
        })}
        </>
      
        
      );
} 

 export default Cards