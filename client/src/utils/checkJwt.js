import base64url from 'base64url'

const checkJwt = {
    isExpired: (jwt) => {
        const jwtArray = jwt.split('.');
        if (jwtArray.length > 3) {
            const payload = base64url.decode(jwtArray[1]);
            const now = Math.floor(Date.now() / 1000);
            if (now > payload.exp) {
                return true
            }
        }
        return false
    }
}

export default checkJwt
