import { useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

//   Cookies.remove("jwt_token");

  if (Cookies.get("jwt_token")) {
    return <Navigate to="/" />;
  }

  const doLogin = async (event) => {
    event.preventDefault();

    if(!email || !password) {
      setError("Email and password are required");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const resp = await fetch(
      "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
      options,
    );

    const data = await resp.json();
    console.log(data);
    if (!data.success) {
      setError(data.message);
    } else {
      Cookies.set("jwt_token", data.data.token);

      window.location.href = "/";
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={doLogin}>
        <h1 className="login-head">Go Business</h1>
        <p className="login-subtitle">Sign in to open your referral dashboard.</p>
        <label htmlFor="email" className="input-label">Email</label>
        <input
          type="text"
          placeholder="you@gmail.com"
          className="input"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="input-label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="••••••••"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading} className="login-btn">
          Sign in
        </button>
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
