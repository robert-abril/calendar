import db from "./firebase";
// eslint-disable-next-line
import { doc, collection, addDoc, getDocs } from "firebase/firestore";

export const createEvent = async (title, start, end) => {
  const eventRef = collection(db, "Events");
  const event = {
    title: title,
    start: start,
    end: end,
  };

  await addDoc(eventRef, event);
};

const eventRef = collection(db, "Events");

export const getAllEvents = async () => {
  try {
    const events = await getDocs(eventRef);
    const event = events.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return event;
  } catch (error) {
    console.log("error :>> ", error);
  }
};
