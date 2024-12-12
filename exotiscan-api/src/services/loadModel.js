const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
  try {
    const model = await tf.loadLayersModel(process.env.MODEL_URL);
    console.log("Model loaded successfully");
    return model;
  } catch (error) {
    console.error("Error loading model:", error.message); // Menampilkan pesan kesalahan
    console.error("Stack trace:", error.stack); // Menampilkan stack trace untuk debugging
    throw error; // Melempar error agar bisa ditangani di tempat lain
  }
}

module.exports = loadModel;
