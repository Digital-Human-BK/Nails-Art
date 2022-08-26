import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from '../../firebase-config';

import Home from './Home/Home';
import Offer from './Offer/Offer';
import Services from './Services/Services';
import About from './About/About';
import Works from './Works/Works';
import Contacts from './Contacts/Contacts';
import LoadingModal from '../common/LoadingModal/LoadingModal';

const contentRef = collection(db, 'content');
const priceRef = collection(db, 'prices');

const LandingPage = () => {
  const [content, setContent] = useState({});
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSiteContent = async () => {
      try {
        const [contentData, pricesData] = await Promise.all([
          getDocs(contentRef),
          getDocs(priceRef),
        ]);
        const formattedContentData = contentData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const formattedPriceData = pricesData.docs.map((doc) => ({
          ...doc.data()
        }));

        setContent(formattedContentData[0]);
        setPrices(formattedPriceData[0]);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSiteContent();
  }, []);

  return (
    <>
      {loading && <LoadingModal />}
      <Home />
      <Offer offer={content.offer} />
      <Services services={content.services} prices={prices} />
      <About about={content.about} />
      <Works />
      <Contacts contacts={content.contacts} />
    </>
  );
};

export default LandingPage;
