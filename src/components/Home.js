import React from "react";

function Home(props) {
  // console.warn("Home", props.data);
  return (
    <>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src={props.imageSource} alt='img' />
        </div>
        <div className='text-wrapper item'>
          <span>
            <b>Product:</b>
          </span>
          <span>{props.productType}</span>
          <br />
          <span>
            <b>Price:$</b>
          </span>
          <span>{props.price}</span>
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
