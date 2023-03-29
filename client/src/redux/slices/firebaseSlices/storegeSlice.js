import { app } from "../../../config/firebase/firebase"
import { connectStorageEmulator, getStorage } from 'firebase/storage'

export const storage = getStorage(app)

if (process.env.NODE_ENV !== 'production') {
    connectStorageEmulator(storage, 'localhost', 9199)
}

