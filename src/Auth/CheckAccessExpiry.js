import { regenerateAccessToken, getCurrentUser } from "../APIs/UserAPIs"
import { useState } from "react" 


const CheckAccessTokenExpiry = ({userId}) => {
    console.log('***CHECK CALLED ****')
    const token = window.localStorage.getItem("Token")

    const tokenExpirationTime = window.localStorage.getItem("ExpiresAt")

    const [userEmail, setUserEmail] = useState("")

    try {
        const currentTimestamp = Math.floor(Date.now() / 1000)

        // keep this check, but it'll be in a slightly different format (no payload variable)
        // we only want to refresh the token if it's going to expire very soon (seconds away)
    if (currentTimestamp < tokenExpirationTime - 10) {
    // API call to regenerate Access Token.

    // User email required.
        console.log('Token all good')
        } 
        else {
        console.log('Token about to expire')
        getCurrentUser(userId)
            .then(data => setUserEmail(data.email))
            .catch(error => console.log('Get current user error: ', error))
        userEmail && regenerateAccessToken(userEmail)
        }
    }
    catch (err) {
        console.log('Error verifying access token:', err);
    }
}

export default CheckAccessTokenExpiry;