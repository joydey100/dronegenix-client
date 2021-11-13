import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase-init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

// Firebase Initialize
firebaseInitialize();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Initial States
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  if (success === true) {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  if (error.length > 0) {
    setTimeout(() => {
      setError("");
    }, 2000);
  }

  useEffect(() => {
    fetch(`https://sheltered-waters-81006.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // remaining User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  // Register new User
  const newUser = (name, img, email, password, location, history) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    // redirect uri
    const redirect_uri = location?.state?.from || "/";

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: img });
          })
          .catch((error) => {});

        setSuccess(true);

        saveUser(email, name, "POST");

        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  // login email-password
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    // redirect uri
    const redirect_uri = location?.state?.from || "/";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setSuccess(true);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  // google login
  const googleLogin = (location, history) => {
    // redirect uri
    setError("");
    setSuccess(false);
    const redirect_uri = location?.state?.from || "/";

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setUser(user);
        setSuccess(true);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  // Save user
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch(`https://sheltered-waters-81006.herokuapp.com/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    newUser,
    user,
    logOut,
    loginUser,
    error,
    loading,
    googleLogin,
    admin,
    success,
    setError,
  };
};

export default useFirebase;
