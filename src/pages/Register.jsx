import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { createUser, signUpProvider } from "../helpers/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(email, password);
    createUser(email, password);
    navigate('/');
  };

  const withGoogleSignUp = () => {
    signUpProvider(navigate);
  }

  return (
    <div className="register">
      <div className="login bg-[url('https://picsum.photos/1600/900')] bg-cover h-screen ">
        <div className="hero min-h-screen" >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleRegister} >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="password"
                      className="input input-bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                <div className="form-control mt-6">
                  <button
                    className="btn bg-secondary border-none "
                    onClick={withGoogleSignUp}
                  >
                    with <img src={google} alt="google" className="w-20 p-2 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
