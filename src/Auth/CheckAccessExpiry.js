import { regenerateAccessToken, getCurrentUser } from "../APIs/UserAPIs";
import { useState } from "react";

const checkAccessTokenExpiry = async (userId) => {
  console.log("***CHECK CALLED ****");
  console.log("userId in check", userId);
  const token = window.localStorage.getItem("Token");

  const tokenExpirationTime = window.localStorage.getItem("ExpiresAt");

  // const [userEmail, setUserEmail] = useState("")
  let usersEmail = "";
  try {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // we only want to refresh the token if it's going to expire very soon (seconds away)
    if (currentTimestamp < tokenExpirationTime - 10) {
      console.log("Token all good");
    } else {
      // API call to regenerate Access Token.
      console.log("Token about to expire");
        debugger;
      getCurrentUser(userId)
        .then((userData) => {
          usersEmail = userData.email;
          console.log("usersEmail", usersEmail);

          if (usersEmail) {
            console.log('REGEN CALLED, EMAIL', usersEmail)
            regenerateAccessToken(usersEmail)
          }
        })

      // .then(data => setUserEmail(data.email))
      // .catch(error => console.log('Get current user error: ', error))
    }
  } catch (err) {
    console.log("Error verifying access token:", err);
  }
};

export default checkAccessTokenExpiry;
