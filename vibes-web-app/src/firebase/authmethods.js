// auth methods for user to sign up
import firebase from "./firebase.config"

// github 
export const githubProvider = new firebase.auth.GithubAuthProvider()

// google
export const googleProvider = new firebase.auth.GoogleAuthProvider()