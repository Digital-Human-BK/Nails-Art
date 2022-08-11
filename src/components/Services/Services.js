import InnerWidth from '../common/InnerWidth/InnerWidth';
import cn from './Services.module.css';

const Services = () => {
  return (
    <section id='services' className={cn.services}>
      <InnerWidth>
        <h2 className={cn.section_title}>Nail Studio Services</h2>
        <div className={cn.divider} />
        <p className={cn.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          officiis minus consequuntur veritatis minima. Vel ab distinctio alias
          omnis maiores quam tempore cumque maxime doloremque!
        </p>
        <ul className={cn.services_list}>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/acrilic.jpg" alt="Acrilic Set" />
            <h3 className={cn.item_title}>Acrilic set</h3>
            <p className={cn.item_price}>$25*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/shellac.jpg" alt="Shellac" />
            <h3 className={cn.item_title}>Shellac</h3>
            <p className={cn.item_price}>$30*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/french.jpg" alt="French" />
            <h3 className={cn.item_title}>French</h3>
            <p className={cn.item_price}>$40*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/repair.jpg" alt="Repair" />
            <h3 className={cn.item_title}>Repair</h3>
            <p className={cn.item_price}>$15*</p>
          </li>
        </ul>
        <p className={cn.disclaimer}>*Prices may vary depending on additional services</p>
      </InnerWidth>
    </section>
  );
};

export default Services;
