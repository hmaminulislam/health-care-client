import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const { googleSignIn, loginUser } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //submit button handle
    const submitHandle = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //submit login button handle
        loginUser(email, password)
        .then(result => {
            toast.success('Login successfull')
            form.reset()
            navigate(from, { replace: true });
            console.log(result.user)
        })
        .catch(error => {
            toast.error('Login not successfull')
            console.log(error)
        })
    }

    //google login button handle
    const googleBtnHandle = () => {
        googleSignIn()
        .then(result => {
            toast.success('Login successfull')
            navigate(from, { replace: true });
            console.log(result.user)
        })
        .catch(error => {
          toast.error('Login not successfull')
          console.log(error);
        })
    }
  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-md shadow-2xl sm:p-8 bg-gray-50 text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">Login</h2>
      <p className="text-sm text-center text-gray-600">
        Dont have account? {" "}
        <Link to='/signup' className="focus:underline hover:underline text-sky-500">Sign up here</Link>
      </p>
      <div className="my-6 space-y-4">
        <button onClick={googleBtnHandle}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md border-gray-600 outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-600" />
        <p className="px-3 text-gray-600">OR</p>
        <hr className="w-full text-gray-600" />
      </div>
      <form onSubmit={submitHandle}
        className="space-y-8"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 outline-none border-emerald-600"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              required
              className="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-800 border-emerald-600 outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-emerald-600 text-gray-50"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
