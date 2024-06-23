import { Link, useNavigate } from "react-router-dom";
import logo from "/rq1.png";
import SideImg from "/collective-3291989_1280.webp";
import Button from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";

import { registerUserApi } from "../../API/api";

type Inputs = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};
function SignUp() {
  // const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data.password);
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
    };
    console.log(import.meta.env.VITE_SERVER_SITE);

    const responseData = await registerUserApi(payload);
    console.log("reg suc", responseData);
    if (responseData.status === 201) {
      alert("success");
      navigate("/login");
    } else {
      alert("Failed");
    }
  };
  return (
    <section className="gradient-form h-full  bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex  lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12 bg-black">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img className="mx-auto w-48" src={logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-white text-xl font-semibold">
                        We are The{" "}
                        <span className="text-logo-color font-bold">RQ</span>{" "}
                        Team
                      </h4>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="max-w-sm  mx-auto "
                    >
                      <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                          First Name
                        </label>
                        <input
                          {...register("firstName")}
                          name="firstName"
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                          Last Name
                        </label>
                        <input
                          {...register("lastName")}
                          name="lastName"
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Desuza"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                          User Name
                        </label>
                        <input
                          {...register("userName")}
                          name="userName"
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John000"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          name="email"
                          type="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@flowbite.com"
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                          Password
                        </label>
                        <input
                          {...register("password")}
                          name="password"
                          type="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="flex gap-1 items-start mb-5">
                        <p className="text-white">Already have an account? </p>{" "}
                        <span className="text-white">
                          <Link className="underline text-blue-400" to="/login">
                            Login
                          </Link>{" "}
                        </span>
                      </div>
                      <Button title="Sign Up"></Button>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center  lg:w-6/12  lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    backgroundImage: `url(${SideImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img className="ml-16" src={SideImg} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
