import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase-config";
import { getDatabase, set, ref, get } from "firebase/database";

initializeApp(firebaseConfig);
const db = getDatabase();

export const getData = (payload) => {
  // onValue("room_" + payload, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log("data :>> ", data);
  // });
  return get(ref(db, "room_" + payload))
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
    set(ref(db, "room_" + payload), data);
  } catch (error) {
    throw new Error(error);
  }
};
