from flask import Flask, send_from_directory
from flask_restful import Api
from api import QueryHandler

app = Flask(__name__)

api = Api(app)

api.add_resource(QueryHandler, '/api/recommend')

if __name__ == "__main__":
    app.run(host='0.0.0.0')