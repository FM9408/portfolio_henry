import { app } from "../../../config/firebase/firebase"
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword, signInAnonymously, signOut, setPersistence, createUserWithEmailAndPassword, updateProfile, updatePhoneNumber, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth'
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
        throw new Error(error.code)
    }
}

export async function createUser() {
    try {
        const credential = await createUserWithEmailAndPassword(auth, "medina.766@hotmail.com", "Uamicasa12?")
        const user = credential.user
        await updateProfile(user, {
            displayName: 'FM9408',
            photoURL:'https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/341560441_1872068669816195_1002535544486985210_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH0DBylvFI_sFaX1Y_sdC-yVIQB7Ytt4utUhAHti23i68YV_XJR-TVFcst4W-L1AiOgh9uHg-LxqVRfV6xEWg-V&_nc_ohc=HwT08WB81pEAX8R9VQl&_nc_ht=scontent.fmex27-1.fna&oh=00_AfD2FkokeZqIC6jJPBsJEawO2hudTuHvvu2Tq_iMxYDsMA&oe=644B950C'
        })
        await updatePhoneNumber(user, '+525523098016')
        const dbUser = await axios.post('/user/create', {
            ...user,
            firstName: 'Felipe Akvaar',
            lastName: 'Medina Carrillo',
            isAdmin: true
        })
        let expandedUser = Object.assign(user.toJSON(), dbUser)
        console.log(expandedUser)
        return expandedUser

    } catch (error) {
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