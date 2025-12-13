const ImageKit = require('imagekit');

const imagekit= new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadfile(file,filename){
    const result= await imagekit.upload({
        file:file,
        fileName: filename,
    });
    return result; // returns the uploaded file details
}


module.exports={uploadfile};