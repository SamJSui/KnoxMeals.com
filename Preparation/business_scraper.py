import time
import pandas as pd
import os
import requests
import json

YELP_API_KEY = "MF13jbVBKBn690aq5Jo3YnEwoX3kFxFkqnIrS7cB-o3LQ01PjhjGRCCICknWiQs2Xrb0cznjUmxoVIf9jT4Bfiv3i9o35iZhL2zuUDyiNbHRHkUiTdpjRrAp6ekYY3Yx"

curr_dir = os.getcwd()
repo_dir = os.path.join(curr_dir, os.pardir)
data_dir = os.path.join(repo_dir, 'data')
output_dir = os.path.join(data_dir, 'businesses.csv')
links_csv_path = os.path.join(data_dir, 'knoxville_restaurant_links.csv')

restaurant_links = pd.read_csv(links_csv_path)
restaurant_cols = ['Restaurant ID', 'Restaurant Name', 'Review Count', 'Overall Rating', 'Price Range', 'Categories', 'Coordinates', 'Address', 'Phone', 'Image']
df_restaurants = pd.DataFrame(columns=restaurant_cols)

def scrape_business():
    term = 'Restaurants'
    location = 'Knoxville'
    SEARCH_LIMIT = 1
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
        response = response_json['businesses']
        if 'error' in response_json.keys():
            break
        response = response[0]
        print(response)

        categories = ''
        for title in response['categories']:
            categories += title['title'] + ','
        coordinates = str(response['coordinates']['latitude']) + ' ' + str(response['coordinates']['longitude'])
        address = ''
        for addr in response['location']['display_address']:
            address += addr + ' '
        df_restaurants.loc[len(df_restaurants)] = [
            response['alias'],
            response['name'],
            response['review_count'],
            response['rating'],
            response['price'],
            categories,
            coordinates,
            address,
            response['display_phone'],
            response['image_url'],
                                                    ]
        df_restaurants.to_csv(output_dir, index=False)
        OFFSET += 1
if __name__ == '__main__':
    t0 = time.time()
    scrape_business()
    t1 = time.time()
    print(f"Done in {0:.2f} seconds or {0:.2f} minutes".format(t1 - t0, (t1-t0)/60))
