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
        review_author = soup.find_all('a', {'class': 'css-1m051bw'})
        review_city = soup.find_all('span', {'class': 'css-qgunke'})
        review_date = soup.find_all('span', {'class': 'css-chan6m'})
        review_content = soup.find_all('span', {'class': 'raw__09f24__T4Ezm', 'lang': 'en'})
        num_reviews = len(review_content)
        review_rating = soup.find_all('div',
                                      {
                                          'class': 'five-stars__09f24__mBKym five-stars--regular__09f24__DgBNj display--inline-block__09f24__fEDiJ border-color--default__09f24__NPAKY'
                                      })[0:num_reviews]
        for author in review_author:                                    # Author Name
            if author.text[-1] == '.':
                # print(author.text)
                reviews_dict['Author Name'].append(author.text)
                reviews_dict['Restaurant ID'].append(restaurant_ID)
                if previous_review_author(author):
                    reviews_dict['Author Name'].append(author.text)
                    reviews_dict['Restaurant ID'].append(restaurant_ID)
        for city in review_city:                                        # Author City
            if len(city.text) > 0 and ',' in city.text:
                print(city.text)
                reviews_dict['Author City'].append(city.text)
                if previous_review_city(city):
                    reviews_dict['Author City'].append(city.text)
        for date in review_date:                                        # Review Date
            try:
                clean_date = datetime.datetime.strptime(date.text, "%m/%d/%Y")
                if isinstance(clean_date, datetime.date):
                    # print(clean_date.date())
                    reviews_dict['Review Date'].append(clean_date.date())
            except ValueError:
                continue
        for rating in review_rating:                                    # Review Rating
            rating = str(rating['aria-label']).split()[0] # Extracts the number rating (ex. 3.5 star rating)
            # print(rating)
            reviews_dict['Review Rating'].append(float(rating))
        for content in review_content:                                  # Review Content
            content = content.text
            nonBreakSpace = u'\xa0'
            content = content.replace(nonBreakSpace, '').replace('&amp;', '')
            # print(content)
            reviews_dict['Review Content'].append(content)

        print(restaurant_ID)
        for key in reviews_dict.keys():
            print(f"{key} After: {len(reviews_dict[key])}")
        # dict_to_csv(reviews_dict, 'restaurant_reviews')
        query_index += 10

if __name__ == "__main__":
    test_link = restaurant_links['Links'][6]
    test_name = restaurant_links['Restaurants'][6]
    scrape_reviews(test_name, test_link)
    # for restaurant_name, restaurant_link in zip(restaurant_links['Restaurants'], restaurant_links['Links']):
    #     scrape_reviews(restaurant_name, restaurant_link)
