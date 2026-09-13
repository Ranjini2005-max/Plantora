from flask import Flask, jsonify, request
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import os
from PIL import Image

app = Flask(__name__)
CORS(app)

# Load trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.keras")
model = tf.keras.models.load_model(MODEL_PATH)

# PlantVillage 38 class names
class_names = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Blueberry___healthy",
    "Cherry_(including_sour)___Powdery_mildew",
    "Cherry_(including_sour)___healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
    "Corn_(maize)___Common_rust_",
    "Corn_(maize)___Northern_Leaf_Blight",
    "Corn_(maize)___healthy",
    "Grape___Black_rot",
    "Grape___Esca_(Black_Measles)",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "Grape___healthy",
    "Orange___Haunglongbing_(Citrus_greening)",
    "Peach___Bacterial_spot",
    "Peach___healthy",
    "Pepper,_bell___Bacterial_spot",
    "Pepper,_bell___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Raspberry___healthy",
    "Soybean___healthy",
    "Squash___Powdery_mildew",
    "Strawberry___Leaf_scorch",
    "Strawberry___healthy",
    "Tomato___Bacterial_spot",
    "Tomato___Early_blight",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite",
    "Tomato___Target_Spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato___Tomato_mosaic_virus",
    "Tomato___healthy"
]

# Disease information
disease_info = {
    "Tomato___Late_blight": {
        "symptoms": "Dark brown or black spots on leaves, often with a pale green border.",
        "cause": "Caused by a fungal-like pathogen that spreads rapidly in cool and wet conditions.",
        "treatment": "Remove affected leaves and use an appropriate fungicide if necessary.",
        "prevention": "Avoid overhead watering, maintain good spacing, and remove infected plant material."
    },

    "Tomato___Early_blight": {
        "symptoms": "Brown spots with concentric rings, usually appearing on older leaves first.",
        "cause": "Caused by a fungal pathogen that spreads through infected plant material and soil.",
        "treatment": "Remove infected leaves and apply a suitable fungicide.",
        "prevention": "Keep leaves dry, provide good air circulation, and practice crop rotation."
    },

    "Tomato___healthy": {
        "symptoms": "No major disease symptoms detected.",
        "cause": "The plant appears healthy.",
        "treatment": "No disease treatment is required.",
        "prevention": "Continue proper watering, nutrition, sunlight, and regular monitoring."
    }
}


@app.route("/")
def home():
    return jsonify({"message": "Plantora Backend is Running!"})


@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files["image"]

    if image.filename == "":
        return jsonify({"error": "No image selected"}), 400

    try:
        # Open uploaded image
        img = Image.open(image).convert("RGB")

        # Resize according to model input
        img = img.resize((224, 224))

        # Convert image to numpy array
        img_array = np.array(img)

        # Normalize pixel values
        img_array = img_array / 255.0

        # Add batch dimension
        img_array = np.expand_dims(img_array, axis=0)

        # Make prediction
        predictions = model.predict(img_array)

        # Get predicted class
        predicted_index = np.argmax(predictions[0])
        predicted_class = class_names[predicted_index]

        # Get confidence
        confidence = float(np.max(predictions[0]) * 100)

        # Get disease information
        info = disease_info.get(predicted_class, {
            "symptoms": "Information not available.",
            "cause": "Information not available.",
            "treatment": "Information not available.",
            "prevention": "Information not available."
        })

        # Return prediction and disease information
        return jsonify({
            "success": True,
            "disease": predicted_class,
            "confidence": round(confidence, 2),
            "info": info
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)