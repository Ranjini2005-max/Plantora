import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Plantora Backend is Running!"


@app.route("/predict", methods=["POST"])
def predict():

    image = request.files["image"]

    os.makedirs("uploads", exist_ok=True)

    filepath = os.path.join("uploads", image.filename)

    image.save("test.jpg")

    return jsonify({
        "message": f"{image.filename} uploaded successfully!"
    })


if __name__ == "__main__":
    app.run(debug=True)