import { Link, useLocation } from "react-router-dom";
import { convertSlugToTitle } from "../../Component/ServiseSlug/SlugService.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
const Bread = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="bg-sky-100 border-b-2 h-[100px] flex-col justify-center pt-5 pl-20 ">
      <div>
        <h1 className="text-2xl font-bold font-pops">{`${convertSlugToTitle(
          pathnames[pathnames.length - 1]
        )}`}</h1>
      </div>
      <div className="flex">
        <ul className="flex space-x-4 text-neutral-500 mt-1">
          <li>
            <span className="text-neutral-500 mr-3">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <Link className="hover:text-slate-800 " to="/home">
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const title = convertSlugToTitle(value);
            return (
              <li key={to}>
                <span className="mx-2">
                  <span className="mr-3">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </span>
                {last ? (
                  <span className="text-sky-500">{title}</span>
                ) : (
                  <Link className="hover:text-blue-700 hover:underline" to={to}>
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Bread;
