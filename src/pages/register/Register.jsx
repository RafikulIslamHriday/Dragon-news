import { Link } from "react-router-dom";
import Navber from "../../shared/navber/Navber";
import useAuth from "../../hook/useAuth";
import { useState } from "react";

const Register = () => {
    const { createUserWithEmail} = useAuth();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const handleRegister = e => {
        e.preventDefault();
        setError(null);
        setSuccess(null)
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get('email');
        const pass = form.get("password");

        createUserWithEmail(email, pass)
        .then(res => {
            console.log(res.user);
            setSuccess("user create succesfully")
        })
        .catch(error => {
            setError(error.message);
            
        })

        console.log(name,email, pass);
        e.target.reset()
    }
  return (
    <div>
      <Navber></Navber>
      <div className=" w-1/3 mx-auto mt-10 bg-slate-100 p-10 rounded-md ">
        <h2 className="mb-5 text-2xl">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="px-5 py-3  rounded-md"
          />
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="px-5 py-3 mt-3  rounded-md"
          />
          <br />
          <input
            type="eamil"
            name="email"
            placeholder="email"
            
            className="px-5 py-3 mt-3 rounded-md"
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="passwprd"
            className="px-5 py-3 my-3 rounded-md"
          />

          <br />
          <div className="mb-1">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms" className="ml-3">
              <a href="">Accept our terms and condition</a>
            </label>
          </div>
          <p className="mb-2">
            Already have an account! Pleace{" "}
            <Link to="/login" className="text-sky-400">
              Login
            </Link>
          </p>

          <input
            type="submit"
            value="Register"
            className="px-5 bg-orange-400 text-white py-3 rounded-md"
          />
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
  );
};

export default Register;
