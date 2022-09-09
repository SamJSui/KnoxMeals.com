import datetime
from bs4 import BeautifulSoup
import requests
import pandas as pd
import os
import time

curr_dir = os.getcwd()
repo_dir = os.path.join(curr_dir, os.pardir)
data_dir = os.path.join(repo_dir, 'data')
output_dir = os.path.join(data_dir, 'reviews')
links_csv_path = os.path.join(data_dir, 'knoxville_restaurant_links.csv')

review_cols = ['Restaurant ID', 'Author Name', 'Author City', 'Review Date', 'Review Rating', 'Review Content']
df_reviews = pd.DataFrame(columns=review_cols)
restaurant_links = pd.read_csv(links_csv_path)

def scrape_reviews(restaurant_ID, url):
    NOT_EMPTY = True
    query_index = 0  # ?start=(query_index)
    while NOT_EMPTY:  # REPEATS UNTIL NO REVIEWS LEFT
        NOT_EMPTY = False
        r = requests.get(url + "?start=" + str(query_index))
        soup = BeautifulSoup(r.content, 'html.parser')
        review_cards = soup.find_all('li', {'class': 'margin-b5__09f24__pTvws border-color--default__09f24__NPAKY'})
        for test in review_cards:
            try:
                author = test.find('a', {'class': 'css-1m051bw'})
                city = test.find('span', {'class': 'css-qgunke'})
                review_content = test.find_all('span', {'class': 'raw__09f24__T4Ezm', 'lang': 'en'})
                review_rating = test.find_all('div',
                                              {
                                                  'class': 'five-stars__09f24__mBKym five-stars--regular__09f24__DgBNj display--inline-block__09f24__fEDiJ border-color--default__09f24__NPAKY'
                                              })
                review_date = test.find_all('span', {'class': 'css-chan6m'})
                # print(f"AUTHOR: {author.text}")
                # print(f"CITY: {city.text}")
                NOT_EMPTY = True
                for rating, date, content in zip(review_rating, review_date, review_content):
                    # print(f"Rating: {rating['aria-label']}, Date: {date.text}, Content: {content.text}")
                    rating_stars = float(rating['aria-label'].split()[0])
                    df_reviews.loc[len(df_reviews.index)] = [restaurant_ID, author.text, city.text, date.text, rating_stars, content.text]
            except AttributeError:
                continue
        df_reviews.to_csv(output_dir, index=False)
        print(f"{query_index+10} Reviews for {restaurant_ID}")
        query_index += 10

if __name__ == "__main__":
    # test_link = restaurant_links['Links'][0]
    # test_name = restaurant_links['Restaurants'][0]
    # scrape_reviews(test_name, test_link)
    for restaurant_name, restaurant_link in zip(restaurant_links['Restaurants'], restaurant_links['Links']):
        scrape_reviews(restaurant_name, restaurant_link)
