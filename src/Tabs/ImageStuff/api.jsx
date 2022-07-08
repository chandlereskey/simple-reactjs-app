import axios from 'axios';
const baseURL = "https://chandlerlearning.cognitiveservices.azure.com/";
const subscriptionKey = "0a427b5da2dc4057a50ab1081dc38ee3";

const ComputerVisionClient =
  require("@azure/cognitiveservices-computervision").ComputerVisionClient;
const ApiKeyCredentials = require("@azure/ms-rest-js").ApiKeyCredentials;

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": subscriptionKey } }),
    baseURL
  );


export const uploading = async (image) => {
    let result = ''
    await axios.post("https://api.cloudinary.com/v1_1/dhtzwjvo9/image/upload", image).then((response) => {
      result = response.data.secure_url
    })
    const objects = (await computerVisionClient.analyzeImage(result, {
        visualFeatures: ["Objects"]
    })).objects;
    return objects
}