import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

/**
 * Uploads an image to Cloudinary.
 * @param localFilePath The local file path of the image.
 * @param folder The target folder in Cloudinary.
 * @returns Promise<any> The Cloudinary upload response or null if there's an error.
 */
const uploadImage = async (
  localFilePath: string,
  folder: string,
  resourceType: "image" | "video"
): Promise<any> => {
  try {
    if (!localFilePath) return null;

    // Upload image or video to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder,
      resource_type: resourceType,
    });

    // Delete local file after upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Handle errors
    console.error("Error uploading image:", error);

    // Delete local file if it exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export const uploadAvatar = async (localAvatarFilePath: string) => {
  return uploadImage(localAvatarFilePath, "avatars", "image");
};

export const uploadCoverImage = async (localCoverFilePath: string) => {
  return uploadImage(localCoverFilePath, "coverImages", "image");
};

export const uploadTweetImage = async (localTweetImagePath: string) => {
  return uploadImage(localTweetImagePath, "tweets", "image");
};

export const uploadThumbnail = async (localThumbnailPath: string) => {
  return uploadImage(localThumbnailPath, "thumbnails", "image");
};

export const uploadVideo = async (localVideoPath: string) => {
  return uploadImage(localVideoPath, "videos", "video");
};

/**
 * Deletes a file from Cloudinary.
 * @param publicUrl The public ID of the file to delete.
 * @returns Promise<any> The Cloudinary delete response or null if there's an error.
 */
const deleteFile = async (
  publicUrl: string,
  resourceType: "image" | "video"
): Promise<any> => {
  try {
    if (!fs.existsSync(publicUrl)) {
      return null;
    }

    const filePath = publicUrl.split("/");
    const publicId = filePath[filePath.length - 1].split(".")[0];

    return await cloudinary.uploader.destroy(
      publicId,
      { resource_type: resourceType },
      (err, response) => {
        if (err) {
          console.error("Error deleting image:", err);
        } else {
          console.log("Deleted image:", response);
        }
      }
    );
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};

export const deleteImage = async (publicUrl: string) => {
  return deleteFile(publicUrl, "image");
};

export const deleteVideo = async (publicUrl: string) => {
  return deleteFile(publicUrl, "video");
};
