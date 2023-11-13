from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from api import QueryHandler

app = Flask(__name__, static_url_path='', static_folder='client/build')
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')
api.add_resource(QueryHandler, '/<string:todo_id>')

if __name__ == '__main__':
    app.run(debug=True, port=5000)