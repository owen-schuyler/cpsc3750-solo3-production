import os
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.get("/")
def home():
    return render_template("index.html")

@app.get("/health")
def health():
    # confirms Render can run the service + env vars exist
    has_db_url = bool(os.getenv("DATABASE_URL"))
    return jsonify(ok=True, database_url_configured=has_db_url)