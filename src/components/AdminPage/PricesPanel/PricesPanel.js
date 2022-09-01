import { useEffect, useState } from 'react';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../firebase-config';

import cn from './PricesPanel.module.css';
import LoadingModal from '../../common/LoadingModal/LoadingModal';
import ErrorModal from '../../common/ErrorModal/ErrorModal';

const pricesRef = collection(db, 'prices');

const PricesPanel = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const submitChangesHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const gelManicure = formData.get('gelManicure');
    const strengthening = formData.get('strengthening');
    const extension = formData.get('extension');
    const repair = formData.get('repair');
    const removal = formData.get('removal');
    const repairSingle = formData.get('repairSingle');
    const decorations = formData.get('decorations');
    const decorationsArt = formData.get('decorationsArt');

    try {
      setLoading(true);
      const priceListDoc = doc(db, 'prices', 'price-list');

      const newPrices = {
        gelManicure,
        strengthening,
        extension,
        repair,
        removal,
        repairSingle,
        decorations,
        decorationsArt,
      };
      
      await updateDoc(priceListDoc, newPrices);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const closeErrorHandler = ()=> {
    setError(null)
  }

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
        setError(err.message)
      } finally {
        setLoading(false);
      }
    };
    getPrices();
  }, []);

  return (
    <div className={cn.prices}>
      {loading && <LoadingModal />}
      {error && <ErrorModal error={error} closeError={closeErrorHandler}/>}
      <h2 className={cn.title}>Change Prices</h2>
      <form
        method='POST'
        className={cn.prices_form}
        onSubmit={submitChangesHandler}
      >
        <div className={cn.inputs_wrapper}>
          <label className={cn.label}>
            Gel manicure
            <input
              className={cn.price_input}
              type='number'
              name='gelManicure'
              min={0}
              defaultValue={prices.gelManicure}
            />
          </label>
          <label className={cn.label}>
            Strengthening
            <input
              className={cn.price_input}
              type='number'
              name='strengthening'
              min={0}
              defaultValue={prices.strengthening}
            />
          </label>
          <label className={cn.label}>
            Extension
            <input
              className={cn.price_input}
              type='number'
              name='extension'
              min={0}
              defaultValue={prices.extension}
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
          <label className={cn.label}>
            Gel removal
            <input
              className={cn.price_input}
              type='number'
              name='removal'
              min={0}
              defaultValue={prices.removal}
            />
          </label>
          <label className={cn.label}>
            Single nail repair
            <input
              className={cn.price_input}
              type='number'
              name='repairSingle'
              min={0}
              defaultValue={prices.repairSingle}
            />
          </label>
          <label className={cn.label}>
            Decorations
            <input
              className={cn.price_input}
              type='number'
              name='decorations'
              min={0}
              defaultValue={prices.decorations}
            />
          </label>
          <label className={cn.label}>
            Art decorations
            <input
              className={cn.price_input}
              type='number'
              name='decorationsArt'
              min={0}
              defaultValue={prices.decorationsArt}
            />
          </label>
        </div>
        <button className={cn.submit_btn}>Submit</button>
      </form>
    </div>
  );
};

export default PricesPanel;
