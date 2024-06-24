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
    title: description,
    start: startTime.toISOString(),
    end: endTime.toISOString(),
    categoryType: categoryType,
  };

  await addDoc(eventRef, event);
};

const eventRef = collection(db, "Events");

export const getAllEvents = async () => {
  try {
    const eventSnapshot = await getDocs(eventRef);
    const eventList = eventSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return eventList;
  } catch (error) {
    console.log("error :>> ", error);
  }
};
