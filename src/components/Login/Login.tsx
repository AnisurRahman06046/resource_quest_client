import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../providers/AuthProvider";
import Button from "../Button/Button";
import SideImg from "/loginImg.webp";
import logo from "/rq1.png";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const { login, token } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (token) {
      navigate("/resource/all");
    }
  }, [token, navigate]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = { email: data.email, password: data.password };
    const result = await login(payload);
    // console.log(userLogin,'from login')
    if (result.status === 200 && token) {
      alert("looged in");
      // navigate("/resource/all");
    }
  };
  // if(loading){
  //   return <Loading/>
  // }
  return (
    <section className="gradient-form  bg-neutral-200 dark:bg-neutral-700 w-full h-[calc(100vh-150px)]  relative  ">
      <div className=" w-full h-full">
        <div className=" rounded-lg bg-white shadow-lg dark:bg-neutral-800 h-full">
          <div className="g-0 lg:flex   lg:flex-wrap h-full">
            {/* Left column container */}
            <div className="px-4 md:px-0  lg:w-6/12 bg-black p-1 flex items-center justify-center min-w-fit">
              <div className="md:mx-6 md:p-12 flex-1">
                {/* Logo */}
                <div className="text-center mt-12 ">
                  <img className="mx-auto w-48" src={logo} alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-white text-xl font-semibold">
                    We are The <span>RQ</span> Team
                  </h4>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="max-w-sm mx-auto mb-2"
                >
                  {/* <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div> */}
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                      Your password
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // placeholder="******"
                      required
                    />
                  </div>
                  <div className="flex gap-1 items-start mb-5">
                    <p className="text-white">Don't have an account? </p>{" "}
                    <span className="text-white">
                      <Link className="underline text-blue-400" to="/register">
                        Sign Up
                      </Link>{" "}
                    </span>
                  </div>
                  <Button title="Log In"></Button>
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
    </section>
  );
}

export default Login;
