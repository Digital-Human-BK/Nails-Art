import cn from './Contacts.module.css';
import InnerWidth from '../common/InnerWidth/InnerWidth';

const Contacts = () => {
  return (
    <section id='contacts' className={cn.contacts}>
      <div className={cn.left} />
      <div className={cn.middle} />
      <div className={cn.right} />

      <div className={cn.content}>
        <InnerWidth>
          <div className={cn.content_container}>
            <div className={cn.content_wrapper}>
              <h2 className={cn.content_title}>Location</h2>
              <ul className={cn.content_details}>
                <li className={cn.details}>Ivan Vazov 68</li>
                <li className={cn.details}>Lukovit</li>
                <li className={cn.details}>5700</li>
                <li className={`${cn.details} ${cn.phone}`}>0888 777 666</li>
              </ul>

              <h2 className={cn.content_title}>Follow me</h2>
              <ul className={cn.socials}>
                <li>
                  <a
                    className={cn.socials_link}
                    href='https://www.facebook.com/nataliq.ivanova.754'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-square-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    className={cn.socials_link}
                    href='https://www.youtube.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-instagram' />
                  </a>
                </li>
                <li>
                  <a
                    className={cn.socials_link}
                    href='https://www.linkedin.com/in/natalia-ivanova-95b609176/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin' />
                  </a>
                </li>
              </ul>
              <p className={cn.message}>See You soon!</p>
            </div>
            {/* <img
              className={cn.content_img}
              src='/img/contacts.jpg'
              alt='Nail Polish'
            /> */}
            <iframe
              title='Studio Location'
              className={cn.map}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.836802801314!2d24.153857715716207!3d43.21291218880673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aba37aad50baad%3A0xc44296f5b8c55c4e!2z0YPQuy7QmNCy0LDQvSDQktCw0LfQvtCyIDY4LCA1NzcwINCb0YPQutC-0LLQuNGC!5e0!3m2!1sbg!2sbg!4v1660655040047!5m2!1sbg!2sbg'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </InnerWidth>
      </div>
    </section>
  );
};

export default Contacts;
