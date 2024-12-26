import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import logo from "../img/logo512.png";

const { useState } = require("react");

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(true);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  const togglePassword = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex justify-around items-center bg-gradient-to-tr from-gray-900 to-black h-screen font-nunito">
      
      <h2 className="font-afacadFlux text-yellow-400 font-extrabold text-2xl underline -rotate-0 relative z-0 bottom-64 md:left-96 animate-pulse">becomeIngenious</h2>

      <form
        className="bg-transparent p-6 rounded-md shadow-lg md:w-screen scale-75 absolute z-50"
        onSubmit={handleSubmit}
        id="login-page"
      >
        <h3 className="text-4xl font-bold text-center mb-10 p-2 border-b md:border-0 text-white uppercase">
          Sign up
        </h3>

        <div className="my-7 text-xl text-white tracking-widest">
          <label className="font-semibold">Username:</label>
          <div className="flex border-transparent w-full items-center bg-transparent p-1 mt-2">
            <input
              className="flex-auto p-2 bg-transparent outline-none border-b-4 rounded-lg text-white w-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-7 text-xl text-white tracking-widest">
          <label className="font-semibold">Email:</label>
          <div className="flex rounded w-full items-center bg-transparent p-1 mt-2">
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
          <div className="flex rounded w-full items-center bg-transparent p-1 mt-2">
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
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clipRule="evenodd"
                    />
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
                    </svg>
                  </>
                )}
              </svg>
            </span>
          </div>
        </div>

        <div className="mx-auto text-center mt-10 mb-5 tracking-widest">
          <button
            disabled={isLoading}
            className="text-xl text-center font-semibold cursor-pointer text-white border-0 rounded-md p-2 bg-blue-600 transition ease-out duration-500 hover:scale-125"
          >
            Sign up
          </button>
        </div>
        {error && (
          <div className="text-red-500 mx-auto bg-gray-200 border-2 p-2 rounded-2xl w-fit">
            {error}
          </div>
        )}

        <div className="text-blue-200 text-xl mt-14 mb-0 rounded p-2 tracking-widest">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:underline font-semibold hover:font-bold"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>

      <div className="animate-slowBounce sm:block absolute z-0 opacity-30">
        <img src={logo} alt="" width="600" height="600" />
      </div>
    </div>
  );
};

export default Signup;
