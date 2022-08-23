import { useEffect, useState } from 'react';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../firebase-config';

import cn from './PricesPanel.module.css';
import LoadingModal from '../../common/LoadingModal/LoadingModal';

const pricesRef = collection(db, 'prices');

const PricesPanel = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const submitChangesHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const acrylic = formData.get('acrylic');
    const shellac = formData.get('shellac');
    const french = formData.get('french');
    const repair = formData.get('repair');

    try {
      setLoading(true);
      const priceListDoc = doc(db, 'prices', 'price-list');
      const newPrices = {acrylic, shellac, french, repair}
      await updateDoc(priceListDoc, newPrices);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPrices = async () => {
      try {
        setLoading(true);

        const data = await getDocs(pricesRef);
        const formattedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setPrices(formattedData[0]);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPrices();
  }, []);

  return (
    <div className={cn.prices}>
      {loading && <LoadingModal/>}
      <h2 className={cn.title}>Change Prices</h2>
      <form method='POST' className={cn.prices_form} onSubmit={submitChangesHandler}>
        <div className={cn.inputs_wrapper}>
          <label className={cn.label}>
            Acrylic set
            <input
              className={cn.price_input}
              type='number'
              name='acrylic'
              min={0}
              defaultValue={prices.acrylic}
            />
          </label>
          <label className={cn.label}>
            Shellac
            <input
              className={cn.price_input}
              type='number'
              name='shellac'
              min={0}
              defaultValue={prices.shellac}
            />
          </label>
          <label className={cn.label}>
            French
            <input
              className={cn.price_input}
              type='number'
              name='french'
              min={0}
              defaultValue={prices.french}
            />
          </label>
          <label className={cn.label}>
            Repair
            <input
              className={cn.price_input}
              type='number'
              name='repair'
              min={0}
              defaultValue={prices.repair}
            />
          </label>
        </div>
        <button className={cn.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PricesPanel;
