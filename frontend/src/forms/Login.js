import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import logo from "../img/logo.png";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(true);
  const { login, isLoading, error } = useLogin();
  const [loading, setLoading] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    await login(email, password);
  };

  const togglePassword = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex justify-around items-center bg-gradient-to-tr from-black to-gray-900 h-screen font-nunito">
      <h2 className="font-afacadFlux text-purple-400 font-extrabold text-2xl underline -rotate-0 relative z-0 bottom-64 md:left-96 animate-pulse">
        becomeIngenious
      </h2>

      <form
        className="bg-transparent p-6 rounded-md shadow-lg md:w-screen scale-75 absolute z-50"
        onSubmit={handleSubmit}
        id="login-page"
      >
        <h3 className="text-4xl font-bold text-center mb-10 p-2 border-b md:border-none text-white uppercase">
          Log in
        </h3>

        <div className="my-7 text-xl text-white tracking-widest">
          <label className="font-semibold">Email:</label>
          <div className="flex rounded w-full items-center p-1 mt-2">
            <input
              className="flex-auto p-2 bg-transparent outline-none border-b-4 rounded-lg text-white w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-7 text-xl text-white tracking-widest">
          <label className="font-semibold">Password:</label>
          <div className="flex rounded w-full items-center p-1 mt-2">
            <input
              className="flex-auto p-2 bg-transparent outline-none border-b-4 rounded-lg text-white w-full"
              type={revealed ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="cursor-pointer ms-2" onClick={togglePassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 me-2 text-white hover:scale-125 transition ease-in-out duration-300"
              >
                {revealed ? (
                  <>
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                  </>
                ) : (
                  <>
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clipRule="evenodd"
                    />
                  </>
                )}
              </svg>
            </span>
          </div>
        </div>

        <div className="mx-auto text-center mt-10 mb-5">
          <button
            disabled={isLoading}
            className="text-xl text-center font-semibold cursor-pointer text-white border-0 rounded-md p-2 bg-purple-600 transition ease-out duration-500 hover:scale-125"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
          {loading && (
            <ThreeDots height={50} width={50} color="lightBlue" ariaLabel="loading" />
          )}
        </div>
        {error && (
          <div className="text-red-500 bg-gray-200 border-2 p-2 rounded-2xl w-fit">
            {error}
          </div>
        )}

        <div className="text-white text-xl tracking-widest rounded p-2 mb-0 mt-14">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-400 hover:underline font-semibold hover:font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>

      <div className="animate-slowBounce absolute z-0 opacity-30 sm:block">
        <img src={logo} alt="" width="600" height="600" />
      </div>
    </div>
  );
};

export default Login;
