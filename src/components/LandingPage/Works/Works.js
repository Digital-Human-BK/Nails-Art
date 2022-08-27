import { useNavigate } from 'react-router-dom';

import cn from './Works.module.css';
import InnerWidth from '../../common/InnerWidth/InnerWidth';

const Works = () => {
  const navigate = useNavigate();
  return (
    <section id='works' className={cn.works}>
      <InnerWidth>
        <h2 className={cn.section_title}>Каталог</h2>
        <p className={cn.section_desc}>
          В галерията може да разгледате мои модели, от които да черпите
          вдъхновение за Вашия следващ маникюр.
        </p>
      </InnerWidth>
      <ul className={cn.gallery}>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/thumb1.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/thumb4.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/thumb3.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/thumb2.jpg' alt='Nails art' />
        </li>
      </ul>
      <button className={cn.gallery_btn} onClick={() => navigate('/catalog')}>
        Виж всички
      </button>
    </section>
  );
};

export default Works;
