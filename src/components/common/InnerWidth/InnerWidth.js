import cn from './InnerWidth.module.css';

const InnerWidth = ({ children }) => {
  return <div className={cn.inner_width}>{children}</div>;
};

export default InnerWidth;
