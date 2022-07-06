import cloudinary from 'cloudinary'
//const cloudinaryCore = new cloudinary.cloudinaryCore({cloud_name: 'dhtzwjvo9'})
const baseURL = "https://chandlerlearning.cognitiveservices.azure.com/";
const subscriptionKey = "0a427b5da2dc4057a50ab1081dc38ee3";

const ComputerVisionClient =
  require("@azure/cognitiveservices-computervision").ComputerVisionClient;
const ApiKeyCredentials = require("@azure/ms-rest-js").ApiKeyCredentials;

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": subscriptionKey } }),
    baseURL
  );

cloudinary.config({
  cloud_name: 'dhtzwjvo9',
  api_key: '488586552273439',
  api_secret: 'TytB8YiO_PXCklE7F6K2AGniPYA'
})



export const uploading = async (image) => {
  console.log('before cloudinary')
    const result = await cloudinary.v2.uploader.upload(image);
    console.log('result: ', result)
    const formattedUrl = result.secure_url
    const response = await computerVisionClient.analyzeImage(formattedUrl, {
        visualFeatures: ["Objects"]
    }).objects;
    console.log(response)
}