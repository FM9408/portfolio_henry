import { app } from "../../../config/firebase/firebase"
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword, signInAnonymously, signOut } from 'firebase/auth'

export const auth = getAuth(app)

if (process.env.NODE_ENV !== 'production') {
    connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true
    })

}


export async function getAuthed({ email, password }) {
    try {
        const credential = await signInWithEmailAndPassword(auth, email, password)
        const user = credential.user
        return user

    } catch (error) {
        throw new Error(error.code)
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