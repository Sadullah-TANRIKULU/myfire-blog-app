const Deneme = () => {
    return ( 
        <div className="deneme">
            <div className="navbar bg-primary-500">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">daisyUI</button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="aaa" />
              </div>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li><button>Settings</button></li>
              <li><button>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <button className="label-text-alt link link-hover">Forgot password?</button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <label for="my-modal-6" className="btn modal-button">open modal</label>


      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">Yay!</label>
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
        <button className="btn" >btn</button>
        <input className="input" type="text" placeholder="sth else" />
        <input className="input" type="checkbox" name="checkbox" id="" />
        <input className="input" type="datetime-local" name="datetime" id="" />
        <input className="input" type="email" name="email" id="" />
        <button className="btn btn-disabled ">disabled</button>
        <button className="btn btn-primary" type="submit">submit</button>
        <textarea className="textarea textarea-info" name="textarea" id="" cols="30" rows="10"></textarea>
      </div>
        </div>
     );
}
 
export default Deneme;