from flask import Flask, send_from_directory
from flask_restful import Api
from api import QueryHandler
# from flask_cors import CORS  # Import the CORS class

app = Flask(__name__)
api = Api(app)
# CORS(app)  # Enable CORS for all routes

@app.route('/test', methods=['GET', 'POST'])
def test():
    return 'healthcheck'

api.add_resource(QueryHandler, '/api')

if __name__ == "__main__":
    app.run(host='0.0.0.0')