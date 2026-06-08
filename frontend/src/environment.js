let IS_PROD = true;
const server = IS_PROD ?
    "https://zoom-backend-4wbo.onrender.com" :

    "http://localhost:8000"


export default server;