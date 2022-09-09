import time
import pandas as pd
import requests

YELP_API_KEY = "MF13jbVBKBn690aq5Jo3YnEwoX3kFxFkqnIrS7cB-o3LQ01PjhjGRCCICknWiQs2Xrb0cznjUmxoVIf9jT4Bfiv3i9o35iZhL2zuUDyiNbHRHkUiTdpjRrAp6ekYY3Yx"

def scrape_business():
    term = 'Restaurants'
    location = 'Knoxville'
    SEARCH_LIMIT = 50
    OFFSET = 0
    url = 'https://api.yelp.com/v3/businesses/search'
    t0 = time.time()
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
        print(response)
        OFFSET += 1
    t1 = time.time()
    print(f"Done in {0:.2f}".format(t1-t0))

