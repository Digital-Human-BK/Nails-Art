import cn from './Options.module.css';

const Options = ({ option, setToOption }) => {
  const handleOptionChange = (ev) => {
    setToOption(ev.target.value);
  }

  const isImage = option === 'image';
  const isPrices = option === 'prices';
  const isContent = option === 'content';

  return (
    <div className={cn.wrapper}>
      <input
        type='radio'
        name='select'
        id='image'
        value='image'
        checked={option === 'image'}
        onChange={handleOptionChange}
      />
      <input
        type='radio'
        name='select'
        id='prices'
        value='prices'
        checked={option === 'prices'}
        onChange={handleOptionChange}
      />
      <input
        type='radio'
        name='select'
        id='content'
        value='content'
        checked={option === 'content'}
        onChange={handleOptionChange}
      />
      
      <label htmlFor='image' className={`${cn.option} ${isImage && cn.checked}`}>
        <div className={`${cn.dot} ${isImage && cn.checked_dot}`}></div>
        <span className={`${cn.label} ${isImage && cn.text}`}>Images</span>
      </label>
      <label htmlFor='prices' className={`${cn.option} ${isPrices && cn.checked}`}>
        <div className={`${cn.dot} ${isPrices && cn.checked_dot}`}></div>
        <span className={`${cn.label} ${isPrices && cn.text}`}>Prices</span>
      </label>
      <label htmlFor='content' className={`${cn.option} ${isContent && cn.checked}`}>
        <div className={`${cn.dot} ${isContent && cn.checked_dot}`}></div>
        <span className={`${cn.label} ${isContent && cn.text}`}>Content</span>
      </label>
    </div>
  );
};

export default Options;
