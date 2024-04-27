import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMg, setErrorMg] = useState("");

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword &&
      username.length > 4
    ) {
      console.log("hi");
      let path = "home";
      setTimeout(() => {
        navigate(path);
      }, 2000);
    } else if (password !== confirmPassword) {
      setErrorMg("Password dosn't match");
    } else if (username.length < 4) {
      setErrorMg("Username length is short");
    }
  };

  return (
    <div className="flex items-center justify-center m-0 min-h-screen bg-light-green">
      <div className=" shadow-xl rounded-tl-xl rounded-bl-xl w-[400px] h-[505px] bg-background-main">
        <form id="form" className="px-12 py-6">
          <h1 className="text-center p-4 text-xl text-light-purple font-bold">
            Register With Us
          </h1>
          <div className=" mb-3 flex flex-col relative">
            <label className="text-light-purple mb-2" for="username">
              Username
            </label>
            <input
              className="p-1 rounded-lg text-md outline-none placeholder:p-2 border border-light-green"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" mb-3 flex flex-col relative">
            <label className="text-light-purple mb-2" for="password">
              Password
            </label>
            <input
              className="p-1 rounded-lg text-md outline-none placeholder:p-2 border border-light-green"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className=" mb-3 flex flex-col relative">
            <label className="text-light-purple mb-2" for="password2">
              Confirm password
            </label>
            <input
              className="p-1 rounded-lg text-md outline-none placeholder:p-2 border border-light-green"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="password2"
              placeholder="Enter password again"
            />
          </div>
          <p className="text-red-500">{errorMg}</p>

          <button
            onClick={handleLogin}
            type="submit"
            className="bg-light-green mt-20 text-background-main rounded-3xl font-bold text-lg cursor-pointer w-full p-3 text-center opacity-80 hover:opacity-100 "
          >
            submit
          </button>
        </form>
      </div>
      <div>
        <img
          src="./public/loginImage.jpg"
          className="shadow-xl rounded-tr-xl rounded-br-xl h-[505px]"
        />
      </div>
    </div>
  );
}

export default LoginPage;
