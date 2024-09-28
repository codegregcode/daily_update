import { signInWithGoogle } from '../firebase';

function Landing() {
  return (
    <>
      <h1>daily_update</h1>
      <button onClick={signInWithGoogle}>Login/SignUp</button>
    </>
  );
}

export default Landing;
