import pandas as pd
import os
import requests
import datetime

YELP_API_KEY = "MF13jbVBKBn690aq5Jo3YnEwoX3kFxFkqnIrS7cB-o3LQ01PjhjGRCCICknWiQs2Xrb0cznjUmxoVIf9jT4Bfiv3i9o35iZhL2zuUDyiNbHRHkUiTdpjRrAp6ekYY3Yx"

# DIRECTORY NAVIGATION
curr_dir = os.getcwd()
repo_dir = os.path.join(curr_dir, os.pardir)
data_dir = os.path.join(repo_dir, 'data')
output_dir = os.path.join(data_dir, 'businesses.csv')
links_csv_path = os.path.join(data_dir, 'knoxville_restaurant_links.csv')

# DATAFRAME
restaurant_links = pd.read_csv(links_csv_path)
restaurant_cols = ['Restaurant ID', 'Restaurant Name', 'Review Count', 'Overall Rating', 'Price Range', 'Categories', 'Coordinates', 'Address', 'Phone', 'Image']
df_restaurants = pd.DataFrame(columns=restaurant_cols)

class Restaurant:
    def __init__(self):
        self.alias = ''
        self.name = ''
        self.review_count = ''
        self.rating = ''
        self.price = ''
        self.categories = ''
        self.coordinates = ''
        self.address = ''
        self.phone = ''
        self.image = ''

def restaurant_info_assign(restaurant, response):
    try:
        restaurant.alias = response['alias']
    except KeyError:
        pass
    try:
        restaurant.name = response['name']
    except KeyError:
        pass
    try:
        restaurant.review_count = response['review_count']
    except KeyError:
        pass
    try:
        restaurant.price = response['price']
    except KeyError:
        pass
    try:
        for title in response['categories']:
            restaurant.categories += title['title'] + ','
        restaurant.categories = restaurant.categories[:-1]
    except KeyError:
        pass
    try:
        restaurant.coordinates = str(response['coordinates']['latitude']) + ' ' + str(
            response['coordinates']['longitude'])
    except KeyError:
        pass
    try:
        for addr in response['location']['display_address']:
            restaurant.address += addr + ' '
        restaurant.address.rstrip()
    except KeyError:
        pass
    try:
        restaurant.phone = response['display_phone']
    except KeyError:
        pass
    try:
        restaurant.image = response['image_url']
    except KeyError:
        pass
    return restaurant

def scrape_business():
    term = 'Restaurants'
    location = 'Knoxville'
    SEARCH_LIMIT = 50
    OFFSET = 0
    url = 'https://api.yelp.com/v3/businesses/search'
    while True:
        headers = {
            'Authorization': 'Bearer {}'.format(YELP_API_KEY),
        }
        url_params = {
            'term': term.replace(' ', '+'),
            'location': location.replace(' ', '+'),
            'limit': SEARCH_LIMIT,
            'offset': OFFSET
        }
        response_json = requests.get(url, headers=headers, params=url_params).json()
        if 'error' in response_json.keys():     # Tests if there are items in request
            break
        response = response_json['businesses']

        for rest in response:
            print(rest)
            restaurant = Restaurant()
            restaurant = restaurant_info_assign(restaurant, rest)
        # OUTPUT
            df_restaurants.loc[len(df_restaurants)] = [
                restaurant.alias,
                restaurant.name,
                restaurant.review_count,
                restaurant.rating,
                restaurant.price,
                restaurant.categories,
                restaurant.coordinates,
                restaurant.address,
                restaurant.phone,
                restaurant.image,
                                                        ]
            df_restaurants.to_csv(output_dir, index=False)
        OFFSET += 50

if __name__ == '__main__':
    t0 = datetime.datetime.now()
    scrape_business()
    t1 = datetime.datetime.now()
    t2 = t1 - t0
    print("\nTime:")
    print(f"Done in {0:.2f} seconds".format(t2.seconds))
    print(f"Done in {0:.2f} minutes".format(t2.min))
    print(f"Done in {0:.2f} hours".format(t2.min/60))
