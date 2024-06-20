import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="bg-footer-clr py-2  dark:bg-gray-800">
      <div className="w-full  mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div>
          <span className="text-lg font-semibold text-white sm:text-center dark:text-gray-400">
            Resource Quest
          </span>
          <p className="text-white text-sm">
            Empowering you to manage your resources effectively
          </p>
        </div>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/policy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline me-4 md:me-6">
              Terms of Service
            </Link>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
