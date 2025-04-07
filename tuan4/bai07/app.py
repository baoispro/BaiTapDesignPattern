import os
from flask import Flask
app = Flask(__name__)
@app.route('/')
def env():
    return f"APP_ENV = {os.getenv('APP_ENV')}"
app.run(host="0.0.0.0", port=5000)
