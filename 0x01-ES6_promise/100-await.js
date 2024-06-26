// 100-await.js
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser () {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null
    };
  }
}
