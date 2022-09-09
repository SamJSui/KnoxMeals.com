import datetime
from bs4 import BeautifulSoup
import requests
import pandas as pd
import os
import time

curr_dir = os.getcwd()
repo_dir = os.path.join(curr_dir, os.pardir)
data_dir = os.path.join(repo_dir, 'data')
links_csv_path = os.path.join(data_dir, 'knoxville_restaurant_links.csv')

info_cols = ["Name", "Description", "Overall Rating", "Price Range"]
restaurant_reviews = pd.DataFrame()
restaurant_links = pd.read_csv(links_csv_path)

def previous_review_author(author):
    author_parent = author.parent.parent.parent.parent.parent.parent.parent.parent.parent
    review_update = author_parent.find_all('span', {'class': 'css-1fnccdf', 'data-font-weight': 'semibold'})
    for i in review_update:
        if i.text == "Updated review":
            print(i.text)
            return True
    return False

def previous_review_city(city):
    city_parent = city.parent.parent.parent.parent.parent.parent.parent.parent.parent
    review_update = city_parent.find_all('span', {'class': 'css-1fnccdf', 'data-font-weight': 'semibold'})
    for i in review_update:
        if i.text == "Updated review":
            print(i.text)
            return True
    return False

def dict_to_csv(which_dict, filename):
    df = pd.DataFrame.from_dict(which_dict)
    output_dir = os.path.join(data_dir, filename)
    df.to_csv(output_dir, index=False)

def scrape_reviews(restaurant_ID, url):
    reviews_dict = {'Restaurant ID': [], 'Author Name': [], 'Author City': [], 'Review Date': [], 'Review Rating': [], 'Review Content': []} # DICT TO APPEND TO DATAFRAME
    NOT_EMPTY = True
    query_index = 0 # ?start=(query_index)
    while NOT_EMPTY: # REPEATS UNTIL NO REVIEWS LEFT
        NOT_EMPTY = False
        r = requests.get(url + "?start=" + str(query_index))
        soup = BeautifulSoup(r.content, 'html.parser')
        review_cards = soup.find_all('li', {'class': 'margin-b5__09f24__pTvws border-color--default__09f24__NPAKY'})
        for test in review_cards:
            review_author = test.find('a', {'class': 'css-1m051bw'})
            review_city = test.find('span', {'class': 'css-qgunke'})
            print(review_author.text)

if __name__ == "__main__":
    test_link = restaurant_links['Links'][6]
    test_name = restaurant_links['Restaurants'][6]
    scrape_reviews(test_name, test_link)
    # for restaurant_name, restaurant_link in zip(restaurant_links['Restaurants'], restaurant_links['Links']):
    #     scrape_reviews(restaurant_name, restaurant_link)