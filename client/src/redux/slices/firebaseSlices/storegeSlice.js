import { app } from "../../../config/firebase/firebase"
import { connectStorageEmulator, getStorage } from 'firebase/storage'

export const storage = getStorage(app)

connectStorageEmulator(storage, 'localhost', 9199)

