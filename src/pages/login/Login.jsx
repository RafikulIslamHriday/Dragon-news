import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../../shared/navber/Navber";
import useAuth from "../../hook/useAuth";
import { useState } from "react";

const Login = () => {
    const {loginWithEmail} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const location = useLocation();
    const navigate = useNavigate()
    const handlelogin = e =>{
        setError(null)
        setSuccess(null)
        e.preventDefault();
         const form = new FormData(e.currentTarget);
         const email = form.get("email");
         const pass = form.get("password")
         console.log(email,pass);
        loginWithEmail(email,pass)
        .then(res => {
            console.log(res.user);
            setSuccess("user login succesfully")
            if(location?.state?.from){
              navigate(location.state.from)
            }else{
              navigate('/')
            }
            
        })
        .catch(error => {
            setError(error.message);
            
        })
        e.target.reset()
    }
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen w-3/4 mx-auto bg-base-200">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-4xl mb-3 font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <form  onSubmit={handlelogin} className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p>
                    New to auth project Pleace{" "}
                    <Link to="/register" className="text-sky-400">
                      Register
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    id=""
                    className="px-5 bg-orange-400 text-white py-3 rounded-md"
                  />
                </div>
                <div className="">
                  <button
            
                    className="btn bg-sky-300 text-white text-xl mt-4 border-none"
                  >
                    Google
                  </button>
                </div>
              </form>
              <div className="">
            {
                error && <p className="text-center text-red-400 text-lg mt-5">{error}</p>
            }
            {
                success && <p className="text-center text-green-400 text-lg mt-5">{success}</p>

            }
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
