const Body = () => {
    return (
    <div className="body">
       <div className="search">Search</div>
       <div className="resto-container">
         {
          resObject.map((restaurant) =>
          (<RestaurantCard key={restaurant.data.id} resData = {restaurant}/>))
         }
       </div>
    </div>
    )
 }

 export default Body;
 