const ToastDeneme = () => {
 
  return (
    <div className="toast toast-top toast-end z-20 ">
      <div className="alert alert-info">
        <div>
          <span>New mail arrived.</span>
        </div>
      </div>
      <div className="alert alert-success">
        <div>
          <span>Message sent successfully.</span>
        </div>
      </div>
    </div>
  );
};

export default ToastDeneme;
