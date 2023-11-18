import React, { useState } from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    
    // Carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Map
    const [center, setCenter] = useState({ lat: 35.964668, lng: -83.926453 });
    
    // Input
    const [query, setQuery] = useState('');

    // Restaurants
    const [restaurants, setRestaurants] = useState([
        {"address":"234 Brookview Centre Way Unit 101, Knoxville, TN 37919","description":"Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.","lat":35.935833,"long":-84.003365,"name":"Five Guys","phone":"+1 865-337-8595","rating":4.4,"review_count":959,"tag":"Fast food restaurant, American restaurant, Hot dog restaurant, Hot dog stand, Restaurant","website":"https://restaurants.fiveguys.com/234-brookview-centre-way"},
        {"address":"7301 Kingston Pike, Knoxville, TN 37919","description":"Counter-serve chain for custom burgers, including poultry & veggie versions, plus fries & shakes.","lat":35.930702,"long":-84.03004,"name":"MOOYAH Burgers, Fries & Shakes","phone":"+1 865-474-1641","rating":4.5,"review_count":2100,"tag":"Hamburger restaurant","website":"https://www.mooyah.com/locations/knoxville-tn-117/"},
        {"address":"35 Market Square, Knoxville, TN 37902","description":"Stylish restaurant featuring thoughtfully sourced burgers & an extensive selection of bourbons.","lat":35.965607,"long":-83.920235,"name":"Stock & Barrel","phone":"+1 865-766-2075","rating":4.6,"review_count":3535,"tag":"American restaurant, Bar, Bar & grill, Hamburger restaurant","website":"https://www.thestockandbarrel.com/"},
        {"address":"11433 Parkside Dr, Farragut, TN 37934","description":"Chain for gourmet burgers & other American comfort fare.","lat":35.900185,"long":-84.16374,"name":"Red Robin Gourmet Burgers and Brews","phone":"+1 865-777-1112","rating":4.1,"review_count":2044,"tag":"Restaurant, American restaurant, Family restaurant, Hamburger restaurant, Takeout Restaurant","website":"https://locations.redrobin.com/tn/farragut/711/"},
        {"address":"2613 Adair Dr, Knoxville, TN 37918","description":"","lat":36.025288,"long":-83.927734,"name":"Sam & Andy's Fountain City","phone":"+1 865-281-9539","rating":4.4,"review_count":1215,"tag":"Hamburger restaurant","website":"https://www.samandandysrestaurant.com/"},
        {"address":"9113 Kingston Pike, Knoxville, TN 37923","description":"Fast-food chain specializing in frozen custard & signature burgers made with Midwest beef & dairy.","lat":35.91255,"long":-84.08505,"name":"Culver's","phone":"+1 865-357-1780","rating":4.5,"review_count":3603,"tag":"American restaurant, Dessert restaurant, Fast food restaurant, Hamburger restaurant, Ice cream shop, Restaurant, Sandwich shop","website":"https://www.culvers.com/restaurants/knoxville-tn-kingston-pike?utm_source=Google&utm_medium=Maps&utm_campaign=Google+Places"},
        {"address":"310 Wild Geese Rd, Knoxville, TN 37922","description":"Chain known for steakburgers & milkshakes offering a dinerlike space with retro flair.","lat":35.902225,"long":-84.15389,"name":"Steak 'n Shake","phone":"+1 865-675-2551","rating":3.8,"review_count":1920,"tag":"Hamburger restaurant, American restaurant","website":""}
    ]);

    const [restaurantName, setRestaurantName] = useState('Five Guys');
    const [restaurantDesc, setRestaurantDesc] = useState(
        'Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.'
    );
    const [restaurantTag, setRestaurantTag] = useState(
        'Fast food restaurant, American restaurant, Hot dog restaurant, Hot dog stand, Restaurant'
    );
    const [restaurantReviewCount, setRestaurantReviewCount] = useState(959);
    const [restaurantRating, setRestaurantRating] = useState(4.4);
    const [restaurantPhone, setRestaurantPhone] = useState('+1 865-337-8595');
    const [restaurantAddress, setRestaurantAddress] = useState('234 Brookview Centre Way Unit 101, Knoxville, TN 37919');

    const store = {
        storeCarousel:                  [activeIndex, setActiveIndex],
        storeMap:                       [center, setCenter],
        storeQuery:                     [query, setQuery],
        storeRestaurants:               [restaurants, setRestaurants],
        storeRestaurantName:            [restaurantName, setRestaurantName],
        storeRestaurantDesc:            [restaurantDesc, setRestaurantDesc],
        storeRestaurantTag:             [restaurantTag, setRestaurantTag],
        storeRestaurantReviewCount:     [restaurantReviewCount, setRestaurantReviewCount],
        storeRestaurantRating:          [restaurantRating, setRestaurantRating],
        storeRestaurantPhone:           [restaurantPhone, setRestaurantPhone],
        storeRestaurantAddress:         [restaurantAddress, setRestaurantAddress],
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};