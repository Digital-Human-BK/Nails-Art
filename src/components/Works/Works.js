import cn from './Works.module.css';
import InnerWidth from '../common/InnerWidth/InnerWidth';

const Works = () => {
  return (
    <section id='works' className={cn.works}>
      <InnerWidth>
        <h2 className={cn.section_title}>My works</h2>
        <p className={cn.section_desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reiciendis tenetur dicta exercitationem nihil! Ullam magnam debitis
          cupiditate officia repudiandae quo dicta vero, eum quis saepe vitae
          eveniet sequi recusandae?
        </p>
      </InnerWidth>
      <ul className={cn.gallery}>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/nails1.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/nails2.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/nails3.jpg' alt='Nails art' />
        </li>
        <li className={cn.gallery_item}>
          <img className={cn.item_img} src='/img/nails4.jpg' alt='Nails art' />
        </li>
      </ul>
      <button className={cn.gallery_btn}>SHOW ALL</button>
    </section>
  );
};

export default Works;
