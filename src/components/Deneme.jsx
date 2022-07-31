const Deneme = () => {
  return (
    <div className="deneme">
      
      


      


      <div className="toast toast-top toast-end">
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


      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>

      <label for="my-modal-6" className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>


      <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>


      <div>
        <button className="btn">btn</button>
        <input className="input" type="text" placeholder="sth else" />
        <input className="input" type="checkbox" name="checkbox" id="" />
        <input className="input" type="datetime-local" name="datetime" id="" />
        <input className="input" type="email" name="email" id="" />
        <button className="btn btn-disabled ">disabled</button>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
        <textarea
          className="textarea textarea-info"
          name="textarea"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>


    </div>
  );
};

export default Deneme;
