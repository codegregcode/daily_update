import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, auth, useAuthState } from '../firebase';
import { useEffect } from 'react';

function Landing() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <>
      <h1>daily_update</h1>
      <button onClick={signInWithGoogle}>Login/SignUp</button>
    </>
  );
}

export default Landing;
