import cn from './ErrorModal.module.css';

const ErrorModal = ({ error, closeError }) => {
  return (
    <div className={cn.container}>
      <div className={cn.modal}>
        <div className={cn.alert}>
          <i className='fa-solid fa-circle-exclamation' />
        </div>
        <div className={cn.content}>
          <h2>Error!</h2>
          <p className={cn.error_msg}>{error}</p>
          <button onClick={closeError} className={cn.close_btn}>
            <i className='fa-solid fa-xmark' /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
