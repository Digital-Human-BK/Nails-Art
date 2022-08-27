import cn from './Services.module.css';
import InnerWidth from '../../common/InnerWidth/InnerWidth';

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
            <h3 className={cn.item_title}>Сваляне на гел</h3>
            <p className={cn.item_desc}>оформяне + заздравител</p>
            <p className={cn.item_price}>*{prices.removal}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Поправка</h3>
            <p className={cn.item_desc}>на един нокът</p>
            <p className={cn.item_price}>*{prices.repairSingle}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Декорации</h3>
            <p className={cn.item_desc}>камъни, стикери, фолио и др.</p>
            <p className={cn.item_price}>*до {prices.decorations}.00</p>
          </li>
          <li className={cn.list_item}>
            <h3 className={cn.item_title}>Декорации</h3>
            <p className={cn.item_desc}>ръчно рисувани</p>
            <p className={cn.item_price}>*до {prices.decorationsArt}.00</p>
          </li>
        </ul>
        <p className={cn.disclaimer}>
          *Цените са в български лева и могат да варират в зависимост от допълнителните
          предпочитания на клиента.
        </p>
      </InnerWidth>
    </section>
  );
};

export default Services;
