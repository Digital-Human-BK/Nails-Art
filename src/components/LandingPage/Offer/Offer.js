import cn from './Offer.module.css';
import InnerWidth from '../../common/InnerWidth/InnerWidth';
import Button from '../../common/Button/Button';

const Offer = ({offer}) => {
  return (
    <section id='offer' className={cn.offer}>
      <InnerWidth>
        <h2 className={cn.section_title}>
          I offer vip <strong>nail services</strong>
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
            <h2 className={cn.slogan}>For beautiful hands and stylish nails</h2>
            <p className={cn.description}>
              {offer}
            </p>
            <Button location='/#contacts' classes='right_btn'>Contact me</Button>
          </div>
        </div>
      </InnerWidth>
    </section>
  );
};

export default Offer;
