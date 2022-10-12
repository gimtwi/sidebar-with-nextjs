import React from "react";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <p>Login</p>
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              required
              id="username"
              className="form-input"
              placeholder="Username"
              autoComplete="username"
            />
            <label htmlFor="username" className="form-label">
              Username
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              autoComplete="current-password"
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
