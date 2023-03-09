import React from "react";
// import User from "./User";
// import Home from "./components/Home";
import "./App.css";
import HomeContainer from "./Containers/HomeContainer";
import HeaderContainer from "./Containers/HeaderContainer";
function App() {
  return (
    <div className='App'>
      {/* <h1>app component</h1> */}
      {/* <User data={{ name: "rahul", age: 26 }} /> */}
      {/* <Home /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
