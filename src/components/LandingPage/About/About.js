import cn from './About.module.css';
import Button from '../../common/Button/Button';
import InnerWidth from '../../common/InnerWidth/InnerWidth';

const About = ({ about }) => {
  return (
    <section id='about' className={cn.about}>
      <InnerWidth>
        <h2 className={cn.section_title}>About Me</h2>
        <div className={cn.content}>
          <img className={cn.content_img} src='/img/she.jpg' alt='Natalia' />
          <aside className={cn.side_info}>
            <p className={cn.content_desc}>
              {about}
            </p>
            <Button location={'/#contacts'}>Contact Me</Button>
          </aside>
        </div>
      </InnerWidth>
    </section>
  );
};

export default About;
