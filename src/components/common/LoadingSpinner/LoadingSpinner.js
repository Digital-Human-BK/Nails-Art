import cn from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <section className={cn.loading}>
    <div id={cn.container}>
      <svg viewBox='0 0 100 100'>
        <defs>
          <filter id='shadow'>
            <feDropShadow
              dx='0'
              dy='0'
              stdDeviation='1.5'
              floodColor='#cd825b'
            />
          </filter>
        </defs>
        <circle
          id={cn.spinner}
          style={{}}
          fill={'transparent'}
          stroke={'#cd825b'}
          strokeWidth= {'7px'}
          strokeLinecap= {'round'}
          cx='50'
          cy='50'
          r='45'
        />
      </svg>
      <h2 className={cn.msg}>Loading...</h2>
    </div>
    </section>
  );
};

export default LoadingSpinner;
