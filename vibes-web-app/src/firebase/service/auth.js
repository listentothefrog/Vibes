import firebase from "../firebase.config"

const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithRedirect(provider).then((res) => {
        return res.user;
    }).catch((err) => {
        return err;
    })
}

export default socialMediaAuth