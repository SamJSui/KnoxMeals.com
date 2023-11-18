from .postgres import retrieve_restaurants

from flask import jsonify
from flask_restful import Resource, reqparse

import pickle
import html
import json
import sklearn

restaurants = retrieve_restaurants()

try:
    model_file = open('model/model.pkl', 'rb')
    model_ = pickle.load(model_file)
    model_file.close()
except OSError:
    print("{} COULD NOT OPEN FILE: {}".format(__name__, 'model.pkl'))

try:
    vectorizer_file = open('model/vectorizer.pkl', 'rb')
    vectorizer_ = pickle.load(vectorizer_file)
    vectorizer_file.close()
except OSError:
    print("{} COULD NOT OPEN FILE: {}".format(__name__, 'vectorizer.pkl'))

class QueryHandler(Resource):
  
    def __init__(self):
        pass
        
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('query', type=str, location='args')
        args = parser.parse_args()
        num_recommendations = 7
        sanitized = html.escape(args['query'])
        vectorized = vectorizer_.transform([sanitized])
        predictions = (model_.predict_proba(vectorized)[0]).argsort()[::-1][:num_recommendations]
        return jsonify({'restaurants': [restaurants[i] for i in predictions]})
