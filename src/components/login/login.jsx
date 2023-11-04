import { Link } from "react-router-dom";
import Navbar from "../navigation/navigation";
import "./login.css";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container">
              <h1>
                Login to Your <span>Account</span>
              </h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="input"
              />
              <button type="submit" className="signin">
                Sign In
              </button>
            </form>
            <div className="signup-div">
              <h1>New Here ?</h1>
              <Link to="/signup">
                <button type="button" className="signup">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
