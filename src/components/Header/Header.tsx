import { useContext, useState } from "react";
import logo1 from "/rq1.webp";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { AuthContext, AuthContextType } from "../../providers/AuthProvider";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {logout,token} = useContext(AuthContext) as AuthContextType
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout=()=>{
    console.log('log out')
    logout()
    navigate("/login");
  }

  return (
  //   <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
  //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //     <a
  //       href="/"
  //       className="flex items-center space-x-3 rtl:space-x-reverse"
  //     >
  //       <img src={logo1} className="h-8" alt="Flowbite Logo" />
  //       <span className="self-center text-logo-color font-serif text-2xl font-semibold whitespace-nowrap dark:text-white">
  //         Resource Quest
  //       </span>
  //     </a>
  //     <button
  //       onClick={handleToggle}
  //       data-collapse-toggle="navbar-default"
  //       type="button"
  //       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //       aria-controls="navbar-default"
  //       aria-expanded={isOpen}
  //     >
  //       <span className="sr-only">Open main menu</span>
  //       <svg
  //         className="w-5 h-5"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 17 14"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="M1 1h15M1 7h15M1 13h15"
  //         />
  //       </svg>
  //     </button>
  //     <div
  //       className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
  //       id="navbar-default"
  //     >
  //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //         <li>
  //           <Link
  //             to="/"
  //             className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/about"
  //             className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             About
  //           </Link>
  //         </li>
  //         {/* <li>
  //           <Link
  //             to="/contact"
  //             className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Contact
  //           </Link>
  //         </li> */}
  //         <li>
  //           <Link
  //             to="/login"
  //             className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Login
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/register"
  //             className="block py-2 px-3 text-white hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             SIgn Up
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  <nav className="bg-black border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo1} className="h-8" alt="Resource Quest Logo" />
      <span className="self-center text-logo-color font-serif text-2xl font-semibold whitespace-nowrap dark:text-white">
        Resource Quest
      </span>
    </a>
    <button
      onClick={handleToggle}
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded={isOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div
      className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        {/* <li>
          <Link
            to="/contact"
            className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li> */}
{!token && <>        <li>
          <Link
            to="/login"
            className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="block py-2 px-3 text-white hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Sign Up
          </Link>
        </li></>}
        {token && (
              <li onClick={handleLogout}>
                <Button title="Log Out" />
              </li>
            )}
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
