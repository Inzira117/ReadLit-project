import { useState } from "react";
import { registerUser, loginUser, getCurrentUser, logoutUser } from "../auth";

export default function AuthForm() {
   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? loginUser(email, password)
        : registerUser(username, email, password);
      setMessage(response);
      setCurrentUser(getCurrentUser());
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
  };

  if (currentUser) {
    return (
      <div className="container mt-5 text-light text-center">
        <h3>Welcome, {currentUser.email}</h3>
        <button className="btn btn-warning mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-light">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          type="username"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-warning w-100" type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="mt-3 text-center"
          onClick={() => setIsLogin(!isLogin)}
          style={{ cursor: "pointer" }}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </form>

      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
}