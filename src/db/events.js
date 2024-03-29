import db from "./firebase";
// eslint-disable-next-line
import { doc, collection, addDoc, getDocs } from "firebase/firestore";

export const createEvent = async (
  owner,
  description,
  endTime,
  startTime,
  categoryType
) => {
  const eventRef = collection(db, "Events");
  const event = {
    owner: owner,
    description: description,
    startTime: startTime,
    endTime: endTime,
    categoryType: categoryType,
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
