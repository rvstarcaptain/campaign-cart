import React from "react";
import MyImage from "../MyImage/p-1.jpg";

function Home(props) {
  // console.warn("Home", props.data);
  return (
    <>
      <h1>Campaign Cart</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src={MyImage} alt='img' />
        </div>
        <div className='text-wrapper item'>
          <span>
            <b>Product:</b>
          </span>
          <span>Sports & Fassion</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "gym-equipment" })
            }>
            Add To Cart
          </button>
          <button
            className='remove-cart-btn'
            onClick={() => props.removeToCartHandler({})}>
            Remove To Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
