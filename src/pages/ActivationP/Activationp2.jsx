import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import Bread from "../../Component/BreadCramp/Bread.jsx";
const Activationp2 = () => {
  return (
    <>
      <NavBar />
      <Bread />
      <section className="bg-gray-50 font-pops">
        <div className="flex flex-col items-center justify-center px-2 py-2 mx-auto md:h-screen lg:py-0 bg-white w-full">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 border  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mt-1 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-300 md:text-2xl text-center">
                Create Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-neutral-400"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Please Enter your Email"
                    required={true}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white transition-all duration-300 ease-in-out border  bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Activationp2;
