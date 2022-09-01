import { useState } from 'react';
import {
  addDoc,
  getDocs,
  deleteDoc,
  collection,
  doc,
} from 'firebase/firestore';

import { db } from '../../../firebase-config';
import {
  validateImageCaption,
  validateImageUpload,
} from '../../../helpers/validators';

import cn from './ImagePanel.module.css';
import LoadingModal from '../../common/LoadingModal/LoadingModal';
import ErrorModal from '../../common/ErrorModal/ErrorModal';

const imagesRef = collection(db, 'images');

const ImagePanel = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageCaption, setImageCaption] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedFileHandler = (ev) => {
    setImageFile(ev.target.files[0]);
  };

  const uploadImageHandler = async () => {
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'natalia-nails');

    try {
      setLoading(true);
      validateImageUpload(imageFile);

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dio4dx3uy/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const file = await res.json();
      const url = file.secure_url;

      validateImageCaption(imageCaption);
      await addDoc(imagesRef, { imageUrl: url, caption: imageCaption });
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const showImagesHandler = async () => {
    try {
      setLoading(true);
      const data = await getDocs(imagesRef);
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setImages(formattedData);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const deleteImageHandler = async (id) => {
    const imageRef = doc(db, 'images', id);
    try {
      setLoading(true);
      await deleteDoc(imageRef);
      const updatedImages = images.filter((img) => img.id !== id);
      setImages(updatedImages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeErrorHandler = () => {
    setError(null);
  };

  return (
    <div className={cn.image_panel}>
      {loading && <LoadingModal />}
      {error && <ErrorModal error={error} closeError={closeErrorHandler} />}
      <div className={cn.image_upload}>
        <h2>Image Upload</h2>
        <input
          type='file'
          name='file'
          className={cn.file_input}
          onChange={selectedFileHandler}
        />
        <input
          type='text'
          name='caption'
          maxLength={60}
          placeholder='Image caption'
          className={cn.caption_input}
          onChange={(ev) => setImageCaption(ev.target.value)}
        />
        <button
          className={cn.upload_btn}
          onClick={uploadImageHandler}
          disabled={loading}
        >
          Upload
        </button>
      </div>

      <div className={cn.images}>
        <button className={cn.show_images} onClick={showImagesHandler}>
          Show Images <i className='fa-solid fa-caret-down' />
        </button>
        <ul className={cn.image_list}>
          {images.length > 0 &&
            images.map((img) => (
              <li key={img.id} className={cn.image_item}>
                <img className={cn.img} src={img.imageUrl} alt='nail art' />
                <button
                  className={cn.delete_btn}
                  onClick={() => deleteImageHandler(img.id)}
                >
                  <i className='fa-solid fa-trash-can' />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImagePanel;
