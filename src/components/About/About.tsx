import logo from "/rq1.png"
function About() {
  return (
    <section className="bg-black dark:bg-gray-800 p-8    mx-auto ">
      <div className="text-center max-w-3xl mx-auto ">
        <img
          className="mx-auto w-48 mb-4"
          src={logo}
          alt="Resource Quest Logo"
        />
        <h1 className="text-3xl font-bold text-logo-color dark:text-white mb-4">
          About Resource Quest
        </h1>
        <p className="text-logo-color dark:text-gray-300 mb-4">
          Welcome to Resource Quest, your one-stop solution for saving and
          organizing online resource links. Whether you are a student,
          professional, or just someone who loves to explore the web, Resource
          Quest is here to help you keep track of all the valuable resources you
          come across.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-logo-color dark:text-white mb-2">
          Our Mission
        </h2>
        <p className="text-white dark:text-gray-300 mb-4">
          At Resource Quest, our mission is to simplify the way you save and
          manage online resources. We aim to provide an intuitive platform where
          you can easily store, categorize, and retrieve your favorite links
          anytime, anywhere.
        </p>

        <h2 className="text-2xl font-semibold text-logo-color dark:text-white mb-2">
          Why Choose Resource Quest?
        </h2>
        <ul className="list-disc pl-5 text-white dark:text-gray-300 mb-4">
          <li>User-friendly interface</li>
          <li>Secure and reliable storage</li>
          <li>Easy organization and categorization</li>
          <li>Accessible from any device</li>
          <li>Free to use with premium features available</li>
        </ul>

        <h2 className="text-2xl font-semibold text-logo-color dark:text-white mb-2">
          Our Team
        </h2>
        <p className="text-white dark:text-gray-300 mb-4">
          Resource Quest is developed by a dedicated team of professionals who
          are passionate about making online resource management effortless. Our
          team is committed to constantly improving the platform based on user
          feedback and the latest technological advancements.
        </p>

        <h2 className="text-2xl font-semibold text-logo-color dark:text-white mb-2">
          Contact Us
        </h2>
        <p className="text-white dark:text-gray-300">
          We would love to hear from you! If you have any questions, feedback,
          or suggestions, please feel free to reach out to us at{" "}
          <a
            href="mailto:support@resourcequest.com"
            className="text-blue-500 underline"
          >
            support@resourcequest.com
          </a>
          .
        </p>
      </div>
    </section>


  );
}

export default About;
