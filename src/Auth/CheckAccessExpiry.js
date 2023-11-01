

const checkAccessTokenExpiry = async () => {
    
    try {
        const currentTimestamp = Math.floor(Date.now() / 1000)

        // keep this check, but it'll be in a slightly different format (no payload variable)
        // we only want to refresh the token if it's going to expire very soon (seconds away)
if (payload.exp > currentTimestamp ) {
    // API call to regenerate Access Token.
    // User email required.
        } else {
            return;
        }
    }
    catch (err) {
        console.log('Error verifying access token:', err);
    }
}