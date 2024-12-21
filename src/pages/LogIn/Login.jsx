import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
// @ts-ignore
import img1 from "../../../public/image/googlebtn.png";
// @ts-ignore
import img2 from "../../../public/image/facebtn.png";
// @ts-ignore
import img3 from "../../../public/image/applebtn.png";
import { Link } from "react-router-dom";
import Bread from "../../Component/BreadCramp/Bread.jsx";

const Login = () => {
  return (
    <>
      <NavBar />
      <Bread />
      <section className="bg-gray-50 font-pops">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-white w-full">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 border  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mt-5 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-300 md:text-2xl text-center">
                Welcome Back Again
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-neutral-400"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Please Enter your Email"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-neutral-400 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Please Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-neutral-400  hover:bg-white hover:text-sky-300  "
                  >
                    Forgot password ?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white transition-all duration-300 ease-in-out border  bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-neutral-400 text-center ">
                  Don’t have an account yet ?
                  <a
                    href="#"
                    className="font-medium  ml-3 text-sky-300 hover:bg-white hover:text-gray-700"
                  >
                    Sign up
                  </a>
                </p>
                <p className="text-sm font-light text-neutral-400 text-center">
                  Sign in with
                </p>
                <div className="flex bg-white cursor-pointer">
                  <div className="flex  items-center justify-center gap-3">
                    <Link to="#">
                      <img src={img3} alt="" className="w-32" />
                    </Link>
                    <Link to="#">
                      <img src={img1} alt="" className=" w-32 " />
                    </Link>
                    <Link to="#">
                      <img src={img2} alt="" className=" w-32" />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
