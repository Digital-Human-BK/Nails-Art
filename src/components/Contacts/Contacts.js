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
            <img
              className={cn.content_img}
              src='/img/contacts.jpg'
              alt='Nail Polish'
            />
          </div>
        </InnerWidth>
      </div>
    </section>
  );
};

export default Contacts;
