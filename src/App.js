import React from "react";
// import User from "./User";
// import Home from "./components/Home";
import "./App.css";
import HomeContainer from "./Containers/HomeContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import MyImage1 from "../src/MyImage/p-1.jpg";
import MyImage2 from "../src/MyImage/p-2.jpg";
import MyImage3 from "../src/MyImage/p-3.jpg";
import MyImage4 from "../src/MyImage/p-4.jpeg";
function App() {
  return (
    <div className='App'>
      {/* <h1>app component</h1> */}
      {/* <User data={{ name: "rahul", age: 26 }} /> */}
      {/* <Home /> */}
      <h4>Campaign Cart</h4>
      <HeaderContainer />
      <HomeContainer
        imageSource={MyImage1}
        productType='Fashion & LifeStyle'
        price='1200'
      />
      <br></br>
      <HomeContainer
        imageSource={MyImage2}
        productType='Health & WellNess'
        price='1000'
      />
      <br></br>
      <HomeContainer
        imageSource={MyImage3}
        productType='Health & Wellness'
        price='1500'
      />
      <br></br>
      <HomeContainer
        imageSource={MyImage4}
        productType='Phone & Accessories'
        price='2500'
      />
    </div>
  );
}

export default App;
