const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fonctions utilitaires
const uploadImage = async (imageInput, folder = 'profiles') => {
  try {
    let result;
    
    // Gérer différents types d'input
    if (imageInput && imageInput.buffer) {
      // Cas 1: Buffer (multer memory storage)
      const base64String = `data:${imageInput.mimetype};base64,${imageInput.buffer.toString('base64')}`;
      result = await cloudinary.uploader.upload(base64String, {
        folder: folder,
        resource_type: 'image',
        use_filename: true,
        unique_filename: true,
        overwrite: true
      });
    } else if (imageInput && imageInput.path) {
      // Cas 2: File path (multer disk storage)
      result = await cloudinary.uploader.upload(imageInput.path, {
        folder: folder,
        resource_type: 'image',
        use_filename: true,
        unique_filename: true,
        overwrite: true
      });
    } else if (typeof imageInput === 'string') {
      // Cas 3: Base64 string direct
      result = await cloudinary.uploader.upload(imageInput, {
        folder: folder,
        resource_type: 'image',
        use_filename: true,
        unique_filename: true,
        overwrite: true
      });
    } else {
      console.error('Input reçu:', imageInput);
      throw new Error('Type d\'image non supporté ou input manquant');
    }
    
    return result.secure_url;
  } catch (error) {
    console.error('Erreur upload Cloudinary:', error);
    throw new Error(`Erreur upload Cloudinary: ${error.message}`);
  }
};

const deleteImage = async (imageUrl) => {
  try {
    if (!imageUrl) return;
    
    const publicId = extractPublicId(imageUrl);
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }
  } catch (error) {
    console.error('Erreur suppression Cloudinary:', error);
  }
};

const extractPublicId = (imageUrl) => {
  try {
    const urlParts = imageUrl.split('/');
    const filenameWithExtension = urlParts[urlParts.length - 1];
    const filename = filenameWithExtension.split('.')[0];
    const folderIndex = urlParts.findIndex(part => part === 'upload') + 2;
    const folder = urlParts.slice(folderIndex, -1).join('/');
    
    return folder ? `${folder}/${filename}` : filename;
  } catch (error) {
    console.error('Erreur extraction public_id:', error);
    return null;
  }
};

const generateSignature = (folder = 'profiles', uploadPreset = null) => {
  const timestamp = Math.round(Date.now() / 1000);
  
  const signatureParams = {
    timestamp,
    folder: folder
  };
  
  if (uploadPreset) {
    signatureParams.upload_preset = uploadPreset;
  }
  
  const signature = cloudinary.utils.api_sign_request(
    signatureParams,
    process.env.CLOUDINARY_API_SECRET
  );

  return {
    timestamp,
    signature,
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    folder: folder,
    uploadPreset: uploadPreset
  };
};

module.exports = {
  cloudinary,
  uploadImage,
  deleteImage,
  extractPublicId,
  generateSignature
};
