import React from "react";
import CartImage from "../MyImage/cartimage3.png";

function Header(props) {
  //   console.warn("Header", props.data);

  return (
    <>
      <div className='add-to-cart'>
        <span className='cart-count'>{props.data.length}</span>
        <img className='img-background' src={CartImage} alt='img' />
      </div>
    </>
  );
}
export default Header;
