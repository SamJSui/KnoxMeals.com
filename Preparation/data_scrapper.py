import datetime
from bs4 import BeautifulSoup
import requests
from yelp.client import Client
import pandas as pd
import os
import time

YELP_API_KEY = "MF13jbVBKBn690aq5Jo3YnEwoX3kFxFkqnIrS7cB-o3LQ01PjhjGRCCICknWiQs2Xrb0cznjUmxoVIf9jT4Bfiv3i9o35iZhL2zuUDyiNbHRHkUiTdpjRrAp6ekYY3Yx"
client = Client(YELP_API_KEY)

curr_dir = os.getcwd()
repo_dir = os.path.join(curr_dir, os.pardir)
data_dir = os.path.join(repo_dir, 'data')
links_csv_path = os.path.join(data_dir, 'knoxville_restaurant_links.csv')

info_cols = ["Name", "Description", "Overall Rating", "Price Range"]
restaurant_info = pd.DataFrame(columns=info_cols)
restaurant_reviews = pd.DataFrame()
restaurant_links = pd.read_csv(links_csv_path)

def scrape_business():
    term = 'Restaurants'
    location = 'Knoxville'
    SEARCH_LIMIT = 50
    OFFSET = 0
    url = 'https://api.yelp.com/v3/businesses/search'
    t0 = time.time()
    while True:
        headers = {
            'Authorization': 'Bearer {}'.format(API_KEY),
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

def scrape_reviews(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')
    spans = soup.find_all('span', {'class': 'css-chan6m'})
    # spans = soup.find_all('span', {'class': 'raw__09f24__T4Ezm', 'lang': 'en'}) # Message Content
    for span in spans:
        date = str(span).split(sep='>')[1].split(sep='<')[0]
        try:
            date = datetime.datetime.strptime(date, "%m/%d/%Y")
            if isinstance(date, datetime.date):
                print(date)
        except:
            continue

if __name__ == "__main__":
    test_link = restaurant_links['Links'][0]
    # print(f"Test Link: {test_link}")
    # scrape_business()
    scrape_reviews(test_link)
