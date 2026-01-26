//header

// body

// footer
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16778068/file/original-6e3a9c02cdc6bacd491d6d977f02b2dd.jpg?resize=1024x768&vertical=center"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// restraurt card - we will make a component card - we want to reuse it
// props is a object
const FALLBACK_IMG =
  "https://canada1.discourse-cdn.com/flex031/uploads/jupyter/optimized/2X/5/5c6e78d897b5ec058c8030095362fb3127610a5c_2_1023x476.png";
const RestaurantCard = ({imgsrc,resName,cuisine,rating, duration}) => {
  return (
    <div className="res-card">
      <img
        alt="abc"
        src= {imgsrc}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK_IMG;
        }}
      />
      <h3> {resName}</h3>
      <h4> {cuisine}</h4>
      <h4> {rating}</h4>
      <h4>  {duration}</h4>
    </div>
  );};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>

      <div className="res-container">
        <RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1600628422019-9c3d8f51c1b5?w=800"
  resName="Paradise Biryani House"
  cuisine="Biryani, Mughlai"
  rating="4.3 stars"
  duration="35 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1626776876729-bab4368c48b5?w=800"
  resName="Bawarchi"
  cuisine="Biryani, North Indian"
  rating="4.2 stars"
  duration="30 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800"
  resName="Behrouz Biryani"
  cuisine="Biryani, Persian"
  rating="4.5 stars"
  duration="40 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=800"
  resName="Shah Ghouse"
  cuisine="Hyderabadi, Biryani"
  rating="4.4 stars"
  duration="45 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1604908554027-57a3c7d8c8bb?w=800"
  resName="Pista House"
  cuisine="Biryani, Bakery"
  rating="4.1 stars"
  duration="35 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1625944525572-0c8f1c78f9a6?w=800"
  resName="Kritunga Restaurant"
  cuisine="Andhra, Spicy"
  rating="4.3 stars"
  duration="40 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800"
  resName="Biryani Blues"
  cuisine="Biryani, Kebab"
  rating="4.0 stars"
  duration="30 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800"
  resName="Karim’s"
  cuisine="Mughlai, North Indian"
  rating="4.3 stars"
  duration="45 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800"
  resName="Al Jawahar"
  cuisine="Mughlai, Biryani"
  rating="4.4 stars"
  duration="50 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800"
  resName="The Spicy Venue"
  cuisine="North Indian, Chinese"
  rating="4.2 stars"
  duration="25 min"
/>
<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800"
  resName="Al Jawahar"
  cuisine="Mughlai, Biryani"
  rating="4.4 stars"
  duration="50 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
  resName="Biryani Blues"
  cuisine="Biryani, Kebab"
  rating="4.0 stars"
  duration="30 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800"
  resName="Pista House"
  cuisine="Biryani, Bakery"
  rating="4.1 stars"
  duration="35 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
  resName="Shah Ghouse"
  cuisine="Hyderabadi, Biryani"
  rating="4.4 stars"
  duration="45 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1598514982205-fdbb6f21f6c0?w=800"
  resName="Behrouz Biryani"
  cuisine="Biryani, Persian"
  rating="4.5 stars"
  duration="40 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1625944230945-dfdc9e2dfc7b?w=800"
  resName="Paradise Biryani"
  cuisine="Biryani, Mughlai"
  rating="4.3 stars"
  duration="35 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800"
  resName="The Spicy Venue"
  cuisine="North Indian, Chinese"
  rating="4.2 stars"
  duration="25 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1605478372223-49c39f2d7f8a?w=800"
  resName="Bawarchi"
  cuisine="Biryani, North Indian"
  rating="4.2 stars"
  duration="30 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
  resName="Kritunga"
  cuisine="Andhra, Spicy"
  rating="4.3 stars"
  duration="40 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800"
  resName="Moti Mahal Delux"
  cuisine="North Indian, Mughlai"
  rating="4.1 stars"
  duration="45 min"
/>

<RestaurantCard
  imgsrc="https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=800"
  resName="Punjabi Angithi"
  cuisine="Punjabi, North Indian"
  rating="4.0 stars"
  duration="30 min"
/>



      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
