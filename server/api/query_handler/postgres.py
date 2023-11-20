import psycopg2
from dotenv import load_dotenv
import os

def retrieve_restaurants() -> list:
    load_dotenv()
    POSTGRES_DATABASE = os.environ.get("POSTGRES_DATABASE")
    POSTGRES_HOST = os.environ.get("POSTGRES_HOST")
    POSTGRES_USER = os.environ.get("POSTGRES_USER")
    POSTGRES_PASS = os.environ.get("POSTGRES_PASS")
    POSTGRES_PORT = os.environ.get("POSTGRES_PORT")
    conn = psycopg2.connect(database=POSTGRES_DATABASE,
                            host=POSTGRES_HOST,
                            user=POSTGRES_USER,
                            password=POSTGRES_PASS,
                            port=POSTGRES_PORT)
    
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM restaurants')
    query = cursor.fetchall()

    restaurant_info = [{
        'name':         restaurant[1],
        'description':  restaurant[2],
        'tag':          restaurant[3],
        'rating':       restaurant[4], 
        'review_count': restaurant[5],
        'address':      restaurant[6],      
        'phone':        restaurant[7], 
        'lat':          restaurant[8],
        'long':         restaurant[9],
        'website':      restaurant[10],
        'img':          restaurant[11],
    } for restaurant in sorted(query, key=lambda x: x[0]) ] # Does not return by sorted ID's apparently
    
    return restaurant_info