import Button from '../../common/Button/Button';
import InnerWidth from '../../common/InnerWidth/InnerWidth';
import cn from './About.module.css';

const About = () => {
  return (
    <section id='about' className={cn.about}>
      <InnerWidth>
        <h2 className={cn.section_title}>About Me</h2>
        <div className={cn.content}>
          <img className={cn.content_img} src='/img/she.jpg' alt='Natalia' />
          <aside className={cn.side_info}>
            <p className={cn.content_desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam velit nihil, earum omnis culpa dolor odit ea dolores!
              Corrupti doloremque totam, perspiciatis voluptas nesciunt, facilis
              consequuntur quidem error, maxime necessitatibus mollitia
              voluptate sunt maiores? Consequatur, doloribus rerum! Consequatur
              laborum voluptatum dignissimos, officia, corrupti soluta similique
              at ab tempora dolor porro. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam eius asperiores, omnis dolores deleniti
              quibusdam modi, labore molestias libero at cum. Impedit, quaerat!
              Inventore illo, dignissimos dicta dolor consequatur tenetur
              dolores eum molestias consequuntur rerum aspernatur ut minima
              sapiente quod illum sequi molestiae recusandae repudiandae aut
              veritatis commodi odio! Facere nam, quaerat non provident tenetur
              sed unde.
            </p>
            <Button location={'/#contacts'}>Contact Me</Button>
          </aside>
        </div>
      </InnerWidth>
    </section>
  );
};

export default About;
