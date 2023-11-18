import pandas as pd
import psycopg2
from dotenv import load_dotenv
import os

df = pd.read_csv('cleaned_business.csv').fillna('')

classes = ['A Dopo Sourdough Pizza', 'Aladdin Grill & Pizza', "Aladdin's cafe", 'Amber Restaurant', 'Anaba Japanese Cuisine Downtown', "Applebee's Grill + Bar", 'Archers BBQ', 'Asian Hibachi & sushi', 'Asian River', 'Balter Beerworks', 'Barberitos Knoxville', 'Bida Saigon', 'Bistro at the Bijou', 'Blackhorse Pub & Brewery Knoxville', 'Blaze Pizza', 'Bojangles', 'Bravo! Italian Kitchen', 'Brenz Pizza Co. Knoxville', 'Buffalo Wild Wings', 'Buffet knoxville', 'Cafe 4', "Calhoun's", "Calhoun's On The River", 'Cancun Mexican Restaurant', "Captain D's", "Cazzy's Corner Grill", 'Chaiyo Thai & Sushi Bar', "Cheddar's Scratch Kitchen", 'Chen Garden Restaurant', "Chesapeake's Seafood Restaurant", 'Chez Guevara Restaurant', 'Chick-fil-A', 'Chick-fil-A Homberg Drive', "Chili's Grill & Bar", 'Chipotle Mexican Grill', 'Chivo Taqueria', 'Chopsticks Asian Cuisine', "Chuy's", 'Connors Steak & Seafood', 'Cook Out', 'Corner16', 'Cracker Barrel Old Country Store', "Culver's", "Dazzo's Pizzeria", 'Dead End BBQ', 'Don Delfis Pancake House and Restaurant', 'Downtown Grill & Brewery', 'Dragon Den Chinese Restaurant', "Drake's Knoxville", 'Dynasty Express At Fountain City', 'EL BURRO FLOJO MEXICAN RESTAURANT', 'East Japanese Restaurant', 'El Charro Mexican Restaurant', "El Jinete - Oakridge's Mexican Restaurant", 'El Mezcal Mexican Restaurant', 'El Rey Mexican Restaurant', 'Emilia', 'Farmacy', "Fazoli's", 'Fin-Two Japanese Ale House', 'Finn\'s Irish Restaurant & Tavern', 'First Watch', 'Five Guys', "Fulin's Asian Cuisine in Knoxville", 'Gallo Loco Mexican Restaurant', 'Golden Garden Chinese Restaurant', 'Gondolier Italian Restaurant & Pizza', 'Gosh Ethiopian Restaurant', 'IHOP', 'Ichiban Asian Cuisine', 'J.C. Holdway', "Jackie's Dream", 'Kabuki Restaurant (Downtown)', 'Kabuki Restaurant (Farragut)', 'Kefi', 'King Gyros Mediterranean Restaurant', 'Krystal', 'La Fiesta Mexican Restaurant', 'Lakeside Tavern', 'Lempira Mexican Restaurant & Latin Cuisine', 'Little Bangkok', 'Lonesome Dove Knoxville', 'LongHorn Steakhouse', 'MOOYAH Burgers, Fries & Shakes', "Mahogany's Restaurant", 'Mama Mia Mediterranean food', 'Maple Street Biscuit Company - Sherrill Hill', "Marco's Pizza", 'Market Cocina', 'Mellow Mushroom Farragut', 'Mellow Mushroom Knoxville', 'Melting Pot', 'Mexico Lindo', 'Monterrey Mexican Restaurant', "Myrtle's Chicken and Beer", 'Nama Sushi Bar - Downtown Knoxville', "Nick & J's Cafe", 'Noodles and Company', "Not Watson's Kitchen + Bar", "O'Charley's Restaurant & Bar", 'OliBea', 'Olive Garden Italian Restaurant', 'Oliver Royale', 'Osaka Hibachi & Sushi', "Oscar's Restaurant", 'Outback Steakhouse', "P.F. Chang's", 'Panda Chinese Restaurant', 'Panda Express', 'Pardon My Cheesesteak', 'Parkside Grill', 'Pei Wei Asian Kitchen', 'Penne For Your Thoughts', "Pete's Coffee Shop", "Petro's Chili & Chips - Emory Road", 'Pho 99', 'Pizza Inn', 'Plum Tree Chinese Restaurant', 'Popeyes Louisiana Kitchen', "Potrillo's Taqueria & Neveria", 'Red Lobster', 'Red Robin Gourmet Burgers and Brews', 'Round Up Restaurant and Ice Cream', "Sam & Andy's Fountain City", "Savelli's Italian Restaurant", "Sheri's Restaurant", "Shoney's - Chapman Hwy", "Shoney's - Powell", "Silvia's Mexican Restaurant", 'Smoky Mountain Brewery in Turkey Creek', 'SoKno Taco Cantina', 'Sonic Drive-In', "Steak 'n Shake", 'Sticky Rice Cafe', 'Stir Fry Cafe West Hills', 'Stock & Barrel', 'Storming Crab™- Seafood Restaurant Knoxville', 'Subway', "Sullivan's Fine Food", 'Surin of Thailand', "Sweet P's Barbecue and Downtown Dive", 'Szechuan Garden Chinese Restaurant', 'TOMO POKE BOWL + RAMEN HOUSE', 'Taco Bell', 'Taco Boy Sports Bar & Grill', 'Taste of Thai', 'Tequila Amigos', 'Texas Roadhouse', 'The Cheesecake Factory', 'The Chop House', 'The Original Copper Cellar Restaurant', 'The Original Louis Drive in Restaurant', 'The Plaid Apron', 'The Tomato Head', 'Tokyo Hibachi & Sushi', "Tracy's Restaurant", 'Tupelo Honey Southern Kitchen & Bar', 'Union Place Bar & Grill', 'Viet Taste Restaurant', 'Waffle House', "Walk-On's Sports Bistreaux - Knoxville Restaurant", 'Wasabi Japanese Steakhouse', 'Wings Etc.', 'WokChow Fire Seared Asian', "Zaxby's Chicken Fingers & Buffalo Wings", 'harvest restaurant']
new_df = pd.DataFrame(columns=df.columns)

for cls in classes:
    tmp = df.loc[df['Restaurant Name']==cls]
    new_df.loc[len(new_df)] = tmp.values[0]

new_df['Description'] = new_df['Description'].str.replace('\'', '\'\'')
new_df['Restaurant Name'] = new_df['Restaurant Name'].str.replace('\'', '\'\'')
print(new_df['Restaurant Name'].values)

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
for idx, row in new_df.iterrows():

    cursor.execute(
        f'''INSERT INTO restaurants (name, description, tag, website, rating, review_count, address, phone, lat, long)
        VALUES (
            '{row["Restaurant Name"]}', 
            '{row["Description"]}',
            '{row["Tags"]}',
            '{row['Website']}',
            {row['Rating']},
            {row['Review Count']},
            '{row['Full Address']}',
            '{row['Phone']}',
            '{float(row['Coordinates'].split()[0])}',
            '{float(row['Coordinates'].split()[1])}'
        );'''
    )
    conn.commit()
conn.close()