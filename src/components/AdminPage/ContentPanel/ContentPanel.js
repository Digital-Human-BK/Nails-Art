import { useEffect, useState } from 'react';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../firebase-config';
import { validateContent } from '../../../helpers/validators';

import cn from './ContentPanel.module.css';
import LoadingModal from '../../common/LoadingModal/LoadingModal';
import ErrorModal from '../../common/ErrorModal/ErrorModal';

const contentRef = collection(db, 'content');

const ContentPanel = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const submitChangesHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const offer = formData.get('offer').trim();
    const services = formData.get('services').trim();
    const about = formData.get('about').trim();
    const street = formData.get('street').trim();
    const town = formData.get('town').trim();
    const postCode = formData.get('postCode').trim();
    const phone = formData.get('phone').trim();

    const contacts = { street, town, postCode, phone };

    try {
      setLoading(true);

      const contentDoc = doc(db, 'content', 'content-list');
      validateContent(offer, services, about, contacts);

      const newContent = {
        offer,
        services,
        about,
        contacts,
      };

      await updateDoc(contentDoc, newContent);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeErrorHandler = () => {
    setError(null);
  }

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);

        const data = await getDocs(contentRef);
        const formattedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setContent(formattedData[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);

  return (
    <div className={cn.content}>
      {loading && <LoadingModal />}
      {error && <ErrorModal error={error} closeError={closeErrorHandler}/>}
      <h2 className={cn.title}>Change Content</h2>
      <form
        method='POST'
        className={cn.content_form}
        onSubmit={submitChangesHandler}
      >
        <label className={cn.label}>
          Offer content
          <textarea
            className={cn.content_area}
            name='offer'
            maxLength={230}
            defaultValue={content.offer}
          />
        </label>
        <label className={cn.label}>
          Services content
          <textarea
            className={cn.content_area}
            name='services'
            maxLength={230}
            defaultValue={content.services}
          />
        </label>
        <label className={cn.label}>
          About me content
          <textarea
            className={`${cn.content_area} ${cn.large}`}
            name='about'
            maxLength={1400}
            defaultValue={content.about}
          />
        </label>

        <h2 className={cn.title}> Change Contacts</h2>
        <div className={cn.contacts}>
          <label className={cn.label}>
            Street
            <input
              className={cn.content_input}
              type='text'
              name='street'
              maxLength={20}
              defaultValue={content.contacts?.street}
            />
          </label>
          <label className={cn.label}>
            Town
            <input
              className={cn.content_input}
              type='text'
              name='town'
              maxLength={20}
              defaultValue={content.contacts?.town}
            />
          </label>
          <label className={cn.label}>
            Post Code
            <input
              className={cn.content_input}
              type='text'
              name='postCode'
              maxLength={10}
              defaultValue={content.contacts?.postCode}
            />
          </label>
          <label className={cn.label}>
            Phone
            <input
              className={cn.content_input}
              type='text'
              name='phone'
              maxLength={20}
              defaultValue={content.contacts?.phone}
            />
          </label>
        </div>

        <button className={cn.submit_btn}>Submit</button>
      </form>
    </div>
  );
};

export default ContentPanel;
