import httplib2
from bs4 import BeautifulSoup, SoupStrainer
import pandas as pd
import os
import time

# Navigation
curr_dir = os.getcwd()
repo_dir = os.path.abspath(os.path.join(curr_dir, os.pardir))
data_dir = os.path.join(repo_dir, 'data')

restaurant_name_link_dict = {"Restaurants" : [], "Links" : []}

# Extracts all URLs on the Webpage (Yelp Listings)
def scrape_yelp(url):
    http = httplib2.Http() # Instantiation
    status, response = http.request(url)
    for link in BeautifulSoup(response, 'html.parser', parse_only=SoupStrainer('a')):
        if link.has_attr('href'): #
            restaurant_url = link['href'] # -> /biz/stock-and-barrel-knoxville?osq=Restaurants
            restaurant_url_split = restaurant_url.split(sep='?') # -> [/biz/stock-and-barrel-knoxville, osq=Restaurants]
            restaurant_url_name = restaurant_url_split[0].split(sep='/') # ['', biz, stock-and-barrel-knoxville]

            if len(restaurant_url_name) > 2 and len(restaurant_url_split) > 1: # List Error Handling
                restaurant_name = restaurant_url_name[2] # -> stock-and-barrel-knoxville
                if restaurant_url[0:5] == '/biz/' and \
                        restaurant_url_split[1] == "osq=Restaurants" and \
                        restaurant_name not in restaurant_name_link_dict['Restaurants']:
                    # Appending to Dict
                    restaurant_name_link_dict["Restaurants"].append(restaurant_name)
                    restaurant_name_link_dict["Links"].append("https://www.yelp.com"+restaurant_url_split[0])

if __name__ == "__main__":
    # PARSING
    t0 = time.time() # START TIMER
    for i in range(0, 240, 10): # Iterates through each 10 page listing from 0 to 240
        yelp_knoxville_url = "https://www.yelp.com/search?find_desc=Restaurants&find_loc=Knoxville%2C+TN"
        iter_url = yelp_knoxville_url + "&start=" + str(i)
        scrape_yelp(iter_url)
    t1 = time.time() # URL PARSING LAP
    print("FINISHED PARSING IN {0:.2f}".format(t1-t0))

    # OUTPUT
    df = pd.DataFrame.from_dict(restaurant_name_link_dict)
    output_dir = os.path.join(data_dir, "knoxville_restaurant_links.csv")
    df.to_csv(output_dir, index=False)
