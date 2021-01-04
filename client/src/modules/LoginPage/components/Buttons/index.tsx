import React, { useCallback } from "react";
import firebase, { auth } from "../../../../service/firebase";
import { ButtonsLayout } from "./layout";

export const Buttons = () => {
  
  const handleFacebookButton = useCallback((event: React.MouseEvent) => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGoogleButton = useCallback((event: React.MouseEvent) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result: any) => {
        if (result.user.emailVerified) {
          console.log("google login result", result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ButtonsLayout
      handleFacebookButton={handleFacebookButton}
      handleGoogleButton={handleGoogleButton}
    />
  );
};
