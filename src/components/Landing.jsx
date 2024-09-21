import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <h1>daily_update</h1>
      <Link key="login" to="/login">
        <button>Login</button>
      </Link>
      <Link key="register" to="/register">
        <button>Register</button>
      </Link>
      <Link key="forgotten password" to="/forgot-password">
        <button>Forgotten Password?</button>
      </Link>
    </>
  );
}

export default Landing;
