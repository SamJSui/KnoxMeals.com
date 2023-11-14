from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from api import QueryHandler
from flask_cors import CORS  # Import the CORS class

app = Flask(__name__, static_url_path='', static_folder='client/build')
api = Api(app)
CORS(app)  # Enable CORS for all routes

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')
api.add_resource(QueryHandler, '/api/')

if __name__ == '__main__':
    app.run(debug=True, port=5000)