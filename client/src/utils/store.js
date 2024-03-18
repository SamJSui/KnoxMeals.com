import React, { useState, useRef } from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    
    // Carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Map
    const [center, setCenter] = useState({ lat: 35.964668, lng: -83.926453 });
    
    // Input
    const [query, setQuery] = useState('');

    const restaurantRef = useRef(null);

    // Restaurants
    const [restaurants, setRestaurants] = useState([
        {
            "address": "35 Market Square, Knoxville, TN 37902",
            "description": "Stylish restaurant featuring thoughtfully sourced burgers & an extensive selection of bourbons.",
            "img": "https://cdn.vox-cdn.com/thumbor/ZpPDuS__C0TZ8maIrhwAGlouuEQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13281925/41545259_2393573684021027_8566594773345894400_o.jpg",
            "lat": 35.965607,
            "long": -83.920235,
            "name": "Stock & Barrel",
            "phone": "+1 865-766-2075",
            "rating": 4.6,
            "review_count": 3535,
            "tag": "American restaurant, Bar, Bar & grill, Hamburger restaurant",
            "website": "https://www.thestockandbarrel.com/"
        },
        {
            "address": "1 Market Square, Knoxville, TN 37902",
            "description": "An all-day menu of Southern comfort food with a creative twist, plus craft beers & cocktails.",
            "img": "https://tupelohoneycafe.com/wp-content/uploads/2023/03/51118210180_16cccd2b06_k.jpg",
            "lat": 35.96472,
            "long": -83.919525,
            "name": "Tupelo Honey Southern Kitchen & Bar",
            "phone": "+1 865-522-0004",
            "rating": 4.4,
            "review_count": 2451,
            "tag": "Southern restaurant (US)",
            "website": "https://tupelohoneycafe.com/location/knoxville/"
        },
        {
            "address": "13 Market Square, Knoxville, TN 37902",
            "description": "Laid-back restaurant offering Southern fried chicken specialties, comfort food sides & craft brews.",
            "img": "https://myrtleschickenandbeer.com/wp-content/uploads/2020/10/Chicken-Myrtles-1024x671.jpg",
            "lat": 35.96508,
            "long": -83.91976,
            "name": "Myrtle's Chicken and Beer",
            "phone": "+1 865-851-8833",
            "rating": 4.5,
            "review_count": 1396,
            "tag": "Southern restaurant (US)",
            "website": "https://myrtleschickenandbeer.com/"
        },
        {
            "address": "506 S Gay St, Knoxville, TN 37902",
            "description": "Traditional & new spins on seafood rolls & other Japanese dishes in relaxed surroundings.",
            "img": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/knoxville/IMG_41110-ea145a345056a34_ea145ade-5056-a348-3a74b889f85ed987.jpg",
            "lat": 35.965023,
            "long": -83.91798,
            "name": "Nama Sushi Bar - Downtown Knoxville",
            "phone": "+1 865-633-8539",
            "rating": 4.4,
            "review_count": 1221,
            "tag": "Sushi restaurant, Asian restaurant, Japanese restaurant, Restaurant",
            "website": "https://namasushibar.com/"
        },
        {
            "address": "424 S Gay St, Knoxville, TN 37902",
            "description": "Patrons visit for beers brewed in-house & a global menu of bar food as well as a Sunday jazz brunch.",
            "img": "https://www.knoxnews.com/gcdn/presto/2020/06/17/PKNS/b13248e6-33a7-40fa-b967-28b27ccd4360-DGB0617_0019.jpg",
            "lat": 35.96569,
            "long": -83.918144,
            "name": "Downtown Grill & Brewery",
            "phone": "+1 865-633-8111",
            "rating": 4.4,
            "review_count": 1983,
            "tag": "Bar & grill, Bar, Brewery, Family restaurant, Restaurant",
            "website": "https://www.downtownbrewery.com/"
        },
        {
            "address": "807 S Gay St, Knoxville, TN 37902",
            "description": "Cozy bistro with a seasonal menu of comfort fare to accompany shows in the attached theater.",
            "img": "https://insideofknoxville.com/wp-content/uploads/2018/11/Will-Boyd-Bistro-at-the-Bijou-Knoxville-November-2018.jpg",
            "lat": 35.962402,
            "long": -83.91676,
            "name": "Bistro at the Bijou",
            "phone": "+1 865-544-0537",
            "rating": 4.5,
            "review_count": 598,
            "tag": "Bistro, Brunch restaurant, Hamburger restaurant, Lunch restaurant, Southern restaurant (US), Vegetarian restaurant",
            "website": "https://www.thebistroatthebijou.com/"
        },
        {
            "address": "501 Union Ave SW, Knoxville, TN 37902",
            "description": "Elevated choice for farm-fresh regional dishes, many cooked over a wood-fire grill, plus a full bar.",
            "img": "https://jainc.com/wp-content/uploads/2023/05/JC-Holdway-01_Primary_formatted.jpg",
            "lat": 35.96432,
            "long": -83.92051,
            "name": "J.C. Holdway",
            "phone": "+1 865-312-9050",
            "rating": 4.6,
            "review_count": 453,
            "tag": "Restaurant, Bar",
            "website": "https://www.jcholdway.com/"
        }
    ]);

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantDesc, setRestaurantDesc] = useState('');
    const [restaurantImg, setRestaurantImg] = useState('')
    const [restaurantTag, setRestaurantTag] = useState('');
    const [restaurantReviewCount, setRestaurantReviewCount] = useState(3535);
    const [restaurantRating, setRestaurantRating] = useState(4.6);
    const [restaurantPhone, setRestaurantPhone] = useState("+1 865-766-2075");
    const [restaurantAddress, setRestaurantAddress] = useState("35 Market Square, Knoxville, TN 37902");


    const store = {
        storeCarousel:                  [activeIndex, setActiveIndex],
        storeMap:                       [center, setCenter],
        storeQuery:                     [query, setQuery],
        storeRestaurantRef:             restaurantRef,
        storeRestaurants:               [restaurants, setRestaurants],
        storeRestaurantName:            [restaurantName, setRestaurantName],
        storeRestaurantDesc:            [restaurantDesc, setRestaurantDesc],
        storeRestaurantTag:             [restaurantTag, setRestaurantTag],
        storeRestaurantImg:             [restaurantImg, setRestaurantImg],
        storeRestaurantReviewCount:     [restaurantReviewCount, setRestaurantReviewCount],
        storeRestaurantRating:          [restaurantRating, setRestaurantRating],
        storeRestaurantPhone:           [restaurantPhone, setRestaurantPhone],
        storeRestaurantAddress:         [restaurantAddress, setRestaurantAddress],
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};