import React from "react";

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full max-w-md">
        <form className=" flex flex-col items-start justify-center w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4 w-full">
            <input
              className="w-full p-3 border border-none inset-xl rounded-xl bg-white"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 w-full">
            <input
              className="w-full p-3 border border-none inset-xl rounded-xl bg-white"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="border px-6 justify-self-center text-sky-500 p-2 hover:text-white rounded-xl hover:bg-sky-500 cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <div>
          <p>Continue with</p>
          <div>
            <button>Google</button>
            <button>Apple</button>
            <button>Twitter</button>
          </div>
        </div>
        <p>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
