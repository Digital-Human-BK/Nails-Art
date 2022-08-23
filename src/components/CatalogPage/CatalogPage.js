import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

import cn from './CatalogPage.module.css';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';

const imagesRef = collection(db, 'images');

const CatalogPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        const data = await getDocs(imagesRef);
        const formattedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(formattedData);
        setImages(formattedData);
      } catch (err) {
        console.log(err.message);
        alert('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={cn.gallery}>
      <div className={cn.gallery_wrapper}>
        <ul className={cn.gallery_list}>

          {images.length > 0 &&
            images.map((img, i) => {
              return (
                <li className={cn.gallery_item} key={i}>
                  <img
                    className={cn.image}
                    src={img.imageUrl}
                    alt='nails art'
                  />
                  <p className={cn.caption}>{img.caption}</p>
                </li>
              );
            })}

        </ul>
      </div>
      {images.length === 0 && <h2 className={cn.no_content}>No images yet!</h2>}
    </section>
  );
};

export default CatalogPage;
