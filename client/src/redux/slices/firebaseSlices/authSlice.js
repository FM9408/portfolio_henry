import { app } from "../../../config/firebase/firebase"
import { connectAuthEmulator, getAuth } from 'firebase/auth'

export const auth = getAuth(app)

connectAuthEmulator(auth, 'http://localhost:9099')
