import { useEffect, useState } from 'react';
import { auth, db, useAuthState } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function useFetchOnboardStatus() {
  const [user, loading, error] = useAuthState(auth);
  const [onboardStatus, setOnboardStatus] = useState(null);

  useEffect(() => {
    const fetchOnboardStatus = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setOnboardStatus(userData.onboard_status);
        }
      }
    };

    fetchOnboardStatus();
  }, [user]);

  return { onboardStatus, loading, error };
}

export default useFetchOnboardStatus;
