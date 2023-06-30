import { app } from "../../../config/firebase/firebase"
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword, signInAnonymously, signOut, setPersistence, browserSessionPersistence, browserLocalPersistence, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import axios from 'axios'

export const auth = getAuth(app)

if (process.env.NODE_ENV !== 'production') {
    connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true
    })

}


export async function getAuthed({ email, password, remember }) {

    try {
        
        const credential = await signInWithEmailAndPassword(auth, email, password)
        const user = credential.user
        if (remember === true) {
            await setPersistence(auth, browserLocalPersistence)
        } else {
            await setPersistence(auth, browserSessionPersistence)
        }
        return user

    } catch (error) {
        console.log(error)
        throw new Error(error.code)
    }
}


export async function newUser({email, password, displayName}) {
    try {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(user.user, {
            displayName: displayName
        })
        return user.user
    } catch (error) {
        console.log(Object.assign({}, error))
        throw new Error(error)
    }
}



export async function commonUser() {
    try {
        const anonimousUser = await signInAnonymously(auth)
        return anonimousUser.user
    } catch (error) {
        throw new Error(error)
    }
}

export async function loginOut() {
    try {
        await signOut(auth)
    } catch (error) {
        throw new Error(error)
    }
}