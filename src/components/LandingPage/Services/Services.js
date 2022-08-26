import InnerWidth from '../../common/InnerWidth/InnerWidth';
import cn from './Services.module.css';

const Services = ({ services, prices }) => {
  return (
    <section id='services' className={cn.services}>
      <InnerWidth>
        <h2 className={cn.section_title}>Цени и Услуги</h2>
        <div className={cn.divider} />
        <p className={cn.desc}>{services}</p>
        <ul className={cn.services_list}>
          <li className={cn.list_item}>
            <img
              className={cn.item_img}
              src='/img/gellac.jpg'
              alt='Acrylic Set'
            />
            <h3 className={cn.item_title}>Гел-маникюр</h3>
            <p className={cn.item_price}>*{prices.gelManicure}.00</p>
          </li>
          <li className={cn.list_item}>
            <img
              className={cn.item_img}
              src='/img/strengthening.jpg'
              alt='Shellac'
            />
            <h3 className={cn.item_title}>Укрепване</h3>
            <p className={cn.item_price}>*{prices.strengthening}.00</p>
          </li>
          <li className={cn.list_item}>
            <img
              className={cn.item_img}
              src='/img/extension.jpg'
              alt='French'
            />
            <h3 className={cn.item_title}>Изграждане</h3>
            <p className={cn.item_price}>*{prices.extension}.00</p>
          </li>
          <li className={cn.list_item}>
            <img className={cn.item_img} src='/img/repair.jpg' alt='Repair' />
            <h3 className={cn.item_title}>Поддръжка</h3>
            <p className={cn.item_price}>*{prices.repair}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Поддръжка</h3>
            <p className={cn.item_price}>*{prices.repair}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Поддръжка</h3>
            <p className={cn.item_price}>*{prices.repair}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Поддръжка</h3>
            <p className={cn.item_price}>*{prices.repair}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Поддръжка</h3>
            <p className={cn.item_price}>*{prices.repair}.00</p>
          </li>
        </ul>
        <p className={cn.disclaimer}>
          *Цените могат да варират в зависимост от допълнителните
          предпочитания на клиента.
        </p>
      </InnerWidth>
    </section>
  );
};

export default Services;
