from .postgres import retrieve_restaurants

from flask import request, jsonify
from flask_restful import Api, Resource, reqparse

import pickle
import sklearn
import html

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
        query = request.json.get('query')
        num_recommendations = 7
        sanitized = html.escape(query)
        vectorized = vectorizer_.transform([sanitized])
        predictions = (model_.predict_proba(vectorized)[0]).argsort()[::-1][:num_recommendations]
        return {'restaurants': [restaurants[i] for i in predictions]}

    def post(self):
        query = request.json.get('query')
        num_recommendations = 7
        sanitized = html.escape(query)
        vectorized = vectorizer_.transform([sanitized])
        predictions = (model_.predict_proba(vectorized)[0]).argsort()[::-1][:num_recommendations]
        return {'restaurants': [restaurants[i] for i in predictions]}