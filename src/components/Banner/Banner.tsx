function Banner() {
  return (
    <section className="bg-center pt-5 bg-no-repeat bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-[calc(100vh-109px)] flex justify-center items-center w-full">
      <div className="px-4  lg:mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white sm:text-5xl lg:text-6xl">
          Welcome to <span className="text-red-500">Resource Quest</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 sm:text-xl sm:px-16 lg:px-48">
          Discover and manage your resources like never before
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a> */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <p className="text-center text-gray-700 text-lg font-medium">
              "The best way to predict your future is to create it."
              <span className="block text-sm text-gray-500 mt-1">
                — Abraham Lincoln
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
