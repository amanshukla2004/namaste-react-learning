import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const [resInfo, setResINfo] = useState(null);
    const {resId} = useParams();
    

    useEffect(() => {
        console.log("use effect in action")
        fetchMenu();
    },[]); // why empty array
    


    const fetchMenu = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId={resId}");
        //const json = await data.json();
        //console.log(json);
        
        //setResINfo(json.data);
    };
    

    if(resInfo == null){
        return <Shimmer/>;
    }

    //const {name, cuisines, costforTwoMessage} = resInfo.data.cards[2].card.card.info;

    return <div className="menu">
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>

        </ul>
    </div>
}

export default RestaurantMenu;