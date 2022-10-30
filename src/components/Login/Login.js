import "./Login.css";
import { useContext, useRef, useState } from "react";
import { AUTH_URL } from "../../helpers/config";
import { AJAX } from "../../helpers/helpers";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail && !enteredPassword) return;
    //We perform html validation

    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    try {
      const data = await AJAX("POST", AUTH_URL, credentials);
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      const accType = data.email.includes("manager") ? "manager" : "personal";

      authContext.login(data.idToken, accType, expirationTime.toISOString());
      if (accType === "manager") navigate("/manager");
      else navigate("/personal?id=personal");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Flex">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={submitHandler}>
          <div className="textbox">
            <i className="fas fa-user"></i>
            <input
              type="email"
              placeholder="Email"
              required
              ref={emailInputRef}
            />
          </div>

          <div className="textbox">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              required
              ref={passwordInputRef}
            />
          </div>
          {error && (
            <div style={{ color: "red", fontWeight: "700", fontSize: "16px" }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
