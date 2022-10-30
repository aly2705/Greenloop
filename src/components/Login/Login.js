import "./Login.css";

function Login() {
  return (
    <div class="Flex">
      <div class="login-box">
        <h1>Login</h1>
        <div class="textbox">
          <i class="fas fa-user"></i>
          <input type="email" placeholder="Email" required />
        </div>

        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit" class="btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
