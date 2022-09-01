import { useState } from 'react';

import cn from './AdminPage.module.css';

import Options from './Options/Options';
import ImagePanel from './ImagePanel/ImagePanel';
import PricesPanel from './PricesPanel/PricesPanel';
import ContentPanel from './ContentPanel/ContentPanel';

const AdminPage = () => {
  const [option, setOption] = useState('image');

  const setToOption = (value) => {
    setOption(value);
  };

  return (
    <section className={cn.admin}>
      <h2 className={cn.title}>Hello Natalia</h2>
      <Options option={option} setToOption={setToOption} />
      {option === 'image' && <ImagePanel />}
      {option === 'prices' && <PricesPanel />}
      {option === 'content' && <ContentPanel />}
    </section>
  );
};

export default AdminPage;
