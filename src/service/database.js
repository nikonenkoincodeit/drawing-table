import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase-config";
import { getDatabase, set, ref, get } from "firebase/database";

initializeApp(firebaseConfig);
const db = getDatabase();

export const getData = (payload) => {
  return get(ref(db, "editor/" + payload))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const sendData = (payload, data = {}) => {
  try {
    set(ref(db, "editor/" + payload), data);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
