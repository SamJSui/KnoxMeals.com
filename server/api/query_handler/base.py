from flask import Flask, request
from flask_restful import Api, Resource, reqparse
import pickle
import os

todos = {}

class QueryHandler(Resource):
  
    def __init__(self):
        print(os.listdir())
        try:
            model_file = open('model/model.pkl', 'rb')
            self.model_ = pickle.load(model_file)
            model_file.close()
        except OSError:
            print("COULD NOT OPEN FILE:", 'model.pkl')


        try:
            vectorizer_file = open('model//vectorizer.pkl', 'rb')
            self.vectorizer_ = pickle.load(vectorizer_file)
            vectorizer_file.close()
        except OSError:
            print("COULD NOT OPEN FILE:", 'vectorizer.pkl')
        
    def get(self, todo_id):
        vectorized = self.vectorizer_.transform([todo_id])
        predictions = self.model_.predict_proba(vectorized)
        return {'todo': str(len(predictions[0]))}

    def post(self, todo_id):
        print(request.form['data'])
        todos[todo_id] = request.form['data']
        return {todo_id: todos[todo_id]}