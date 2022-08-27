import cn from './Offer.module.css';
import Button from '../../common/Button/Button';
import InnerWidth from '../../common/InnerWidth/InnerWidth';

const Offer = ({offer}) => {
  return (
    <section id='offer' className={cn.offer}>
      <InnerWidth>
        <h2 className={cn.section_title}>
          Какво ще откриете <strong>тук</strong>?
        </h2>
        <div className={cn.content}>
          <img
            className={cn.image}
            src='/img/offer.jpg'
            loading='lazy'
            alt='saloon'
          />
          <img
            className={cn.circle}
            src='/img/circle.png'
            loading='lazy'
            alt='circle'
          />
          <div className={cn.section_desc}>
            <h2 className={cn.slogan}>За красиви нокти и здрава кожа</h2>
            <p className={cn.description}>
              {offer}
            </p>
            <Button location='/#contacts' classes='right_btn'>Запиши час</Button>
          </div>
        </div>
      </InnerWidth>
    </section>
  );
};

export default Offer;
