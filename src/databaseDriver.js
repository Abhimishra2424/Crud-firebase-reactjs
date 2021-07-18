import { db } from "./firebase";

// adding data to collection

export const addFirebaseData = (data) => db.collection("users").add(data);
