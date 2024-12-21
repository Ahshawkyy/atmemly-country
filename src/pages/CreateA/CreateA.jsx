import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./CreateA.css";
// @ts-ignore
import img1 from "../../../public/image/googlebtn.png";
// @ts-ignore
import img2 from "../../../public/image/facebtn.png";
// @ts-ignore
import img3 from "../../../public/image/applebtn.png";
import { Link } from "react-router-dom";
import Bread from "../../Component/BreadCramp/Bread.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const CreateA = () => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_Name] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);
  const [country2, setCountry2] = useState(false);
  const [d_o_b, setD_o_b] = useState(null);
  const [phone, setPhone] = useState(null);
  const [skills, setSkills] = useState([]);
  const [Selected2, setSelected2] = useState([]);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPassword_Confirmation] = useState(null);
  const [gender, setGender] = useState();
  const [terms_and_conditions, setTerms_and_conditions] = useState(null);

  const handelClick = () => {
    setClick(!click);
  };
  const countryClick = () => {
    setCountry2(!country2);
  };

  const handleToggleSkill = (e, skill) => {
    const selected = [];
    if (e.target.checked) {
      selected.push(skill);
      console.log("name", selected);

      setSelected2((prev) => [...prev, ...selected]);
    } else {
      setSelected2((prev) => prev.filter((s) => s !== skill));
    }
  };
  const handleTogglecountry = (e, country) => {
    const selcountry = [];
    if (e.target.checked) {
      selcountry.push(country);
      console.log("posh", selcountry);
      setSelectCountry(selcountry);
    } else {
      setSelectCountry((e) => e.filter((e) => e !== country));
    }
    // }  else {
    //   setSelectCountry((prev) => prev.filter((s) => s !== selcountry));
    // }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const skiArr = Selected2.map((item) => {
      return item.id;
    });
    console.log(skiArr);

    const countarr = selectCountry.map((item) => {
      return item.id;
    });
    console.log(countarr);

    const response = await axios.post(
      "https://api-atmemly.tetane.com/api/website/register",
      {
        username,
        first_name,
        last_name,
        email,
        country: countarr,
        d_o_b,
        phone,
        skills: skiArr,
        password,
        password_confirmation,
        gender,
        terms_and_conditions,
      }
    );
    console.log(response);
  };
  const getres = async () => {
    const response = await axios.get(
      "https://api-atmemly.tetane.com/api/website/skills"
    );
    console.log(response?.data.data);
    setSkills(response?.data.data);
  };
  useEffect(() => {
    getres();
  }, []);

  const getCoun = async () => {
    const response = await axios.get(
      "https://api-atmemly.tetane.com/api/website/countries"
    );
    console.log(response?.data.data);
    setCountry(response?.data.data);
  };
  useEffect(() => {
    getCoun();
  }, []);

  return (
    <>
      <NavBar />
      <Bread />

      <section className="bg-white ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-20 mb-20 lg:py-0 ">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md lg:max-w-2xl xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-300 md:text-2xl text-center ">
                Create an Account
              </h1>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-500 md:text-md text-center ">
                Register your data to create a new account
              </h1>
              <form
                onSubmit={handelSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    User Name
                  </label>
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Please Enter your "
                    //      required={true}
                  />
                </div>

                <div className="flex justify-between gap-5">
                  <div className="w-1/2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-neutral-500 "
                    >
                      First Name
                    </label>
                    <input
                      onChange={(e) => {
                        setFirst_name(e.target.value);
                      }}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="First Name "
                      //      required={true}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-neutral-500"
                    >
                      Last Name
                    </label>
                    <input
                      onChange={(e) => {
                        setLast_Name(e.target.value);
                      }}
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Last Name "
                      //      required={true}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    Your Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    //      required={true}
                  />
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    Country
                  </label>

                  <div className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 flex   ">
                        Select
                        {selectCountry.length > 0 && (
                          <ul className="space-y-1  ">
                            {selectCountry?.map((country, index) => (
                              <li
                                key={index}
                                className="text-sky-500 text-sm ml-48  "
                              >
                                {country.locales.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </span>
                      <button className="focus:ring-2 focus:cursor-pointer">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="mr-1 size-5 text-neutral-500"
                          onClick={countryClick}
                        />
                      </button>
                    </div>
                    <div className={`${country2 ? "block" : "hidden"}`}>
                      <ul className="space-y-2 mt-2">
                        {country?.map((country, index) => (
                          <li
                            key={index}
                            className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm text-gray-700"
                          >
                            <span>{country.locales.name}</span>
                            <input
                              type="checkbox"
                              onChange={(e) => handleTogglecountry(e, country)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    Birth Date
                  </label>
                  <input
                    onChange={(e) => {
                      setD_o_b(e.target.value);
                    }}
                    type="text"
                    name="birth"
                    id="birth"
                    className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="YYYY-MM-DD "
                    //      required={true}
                  />
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    Mobile Number
                  </label>

                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    name="number"
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Mobile Number "
                    //      required={true}
                  />
                </div>

                <div>
                  <h1 className="block mb-5 text-sm font-medium text-neutral-500 ">
                    Gender
                  </h1>

                  <div className="radio-container">
                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          onChange={() => {
                            setGender(1);
                          }}
                          id="option1"
                          name="radio-group"
                          type="radio"
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label">Male</span>
                      </label>
                    </div>

                    <div className="radio-wrapper">
                      <label className="radio-button">
                        <input
                          onChange={() => {
                            setGender(2);
                          }}
                          id="option2"
                          name="radio-group"
                          type="radio"
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-label">Female</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-neutral-500"
                    >
                      Skills
                    </label>

                    {Selected2.length > 0 && (
                      <div className="mb-4 p-2 bg-sky-100 border border-sky-100 rounded">
                        <p className="font-medium text-sky-700 mb-2">
                          Selected Skills:
                        </p>
                        <ul className="space-y-1">
                          {Selected2?.map((skill, index) => (
                            <li key={index} className="text-sky-400 text-sm">
                              {skill.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Select</span>
                        <button className="focus:ring-2 focus:cursor-pointer">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="mr-1 size-5 text-neutral-500"
                            onClick={handelClick}
                          />
                        </button>
                      </div>

                      <div className={`${click ? "block" : "hidden"}`}>
                        <ul className="space-y-2 mt-2">
                          {skills?.map((skill, index) => (
                            <li
                              key={index}
                              className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm text-gray-700"
                            >
                              <span>{skill.name}</span>
                              <input
                                type="checkbox"
                                // checked={skills.includes(skill)}
                                onChange={(e) => handleToggleSkill(e, skill)}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-neutral-500 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-neutral-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    //      required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-neutral-500 "
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword_Confirmation(e.target.value);
                    }}
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    //      required={true}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      onChange={(e) => {
                        setTerms_and_conditions(e.target.checked);
                      }}
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      //      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 "
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-sky-300 hover:bg-white hover:text-gray-700 "
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white transition-all duration-300 ease-in-out border  bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an Account
                </button>
                <p className="text-sm font-light text-gray-500 text-center ">
                  Already have an Account ?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-sky-300 hover:bg-white hover:text-gray-700 "
                  >
                    Login here
                  </Link>
                </p>
                <p className="text-sm font-light text-slate-700 text-center">
                  Or Sign in with
                </p>
                <div className="flex items-center justify-center bg-white cursor-pointer">
                  <div className="flex  items-center justify-center gap-3">
                    <Link to="https://www.apple.com/eg/">
                      <img src={img3} alt="" className="max-md:w-32" />
                    </Link>
                    <Link to="https://www.google.com/">
                      <img src={img1} alt="" className=" max-md:w-32 " />
                    </Link>
                    <Link to="https://www.facebook.com/login/">
                      <img src={img2} alt="" className=" max-md:w-32" />
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

export default CreateA;
