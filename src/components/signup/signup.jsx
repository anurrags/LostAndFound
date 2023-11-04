import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navigation/navigation";
const signup = () => {
  return (
    <div>
      <Navbar />

      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container">
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                className="input"
              />
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
                Sign Up
              </button>
            </form>
            <div className="signup-div">
              <h1>Welcome Back</h1>
              <Link to="/login">
                <button type="button" className="signup">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
