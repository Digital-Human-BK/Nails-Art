import cn from './Home.module.css';
import InnerWidth from '../../common/InnerWidth/InnerWidth';

const Home = () => {
  return (
    <section id='home' className={cn.home}>
      <InnerWidth>
        <div className={cn.home_content}>
          <h3 className={cn.welcome}>Добре дошли в</h3>
          <br />
          <h1 className={cn.main_title}>Natalia Nails Art Studio</h1>
        </div>
      </InnerWidth>
    </section>
  );
};

export default Home;
