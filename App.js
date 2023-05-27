import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";




const AppLayout = () => {
   return (
      <div className="app">
         <Header/>
         <Body/>
         <RestaurantCard/>
         <resObject/>
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)