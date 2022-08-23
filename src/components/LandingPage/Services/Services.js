import InnerWidth from '../../common/InnerWidth/InnerWidth';
import cn from './Services.module.css';

const Services = ({services, prices}) => {
  return (
    <section id='services' className={cn.services}>
      <InnerWidth>
        <h2 className={cn.section_title}>Nail Studio Services</h2>
        <div className={cn.divider} />
        <p className={cn.desc}>
          {services}
        </p>
        <ul className={cn.services_list}>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/acrylic.jpg" alt="Acrylic Set" />
            <h3 className={cn.item_title}>Acrylic set</h3>
            <p className={cn.item_price}>${prices.acrylic}*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/shellac.jpg" alt="Shellac" />
            <h3 className={cn.item_title}>Shellac</h3>
            <p className={cn.item_price}>${prices.shellac}*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/french.jpg" alt="French" />
            <h3 className={cn.item_title}>French</h3>
            <p className={cn.item_price}>${prices.french}*</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src="/img/repair.jpg" alt="Repair" />
            <h3 className={cn.item_title}>Repair</h3>
            <p className={cn.item_price}>${prices.repair}*</p>
          </li>
        </ul>
        <p className={cn.disclaimer}>*Prices may vary depending on additional services</p>
      </InnerWidth>
    </section>
  );
};

export default Services;
