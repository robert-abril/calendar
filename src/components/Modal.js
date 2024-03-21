import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { createEvent } from "../db/events";

const categortyTypes = [
  "AGT = Time w/ Agent",
  "CC = Culture Committee",
  "FW = Field Work",
  "I = Inventory",
  "KB = Knowledge base",
  "L = Lunch",
  "M = Meeting",
  "MTR = Mentor",
  "OB = Onboarding",
  "OOO = Out of Office",
  "O = Other",
  "PSS = Product Support",
  "QA = Quality Assurance",
  "T2 = Tier 2",
  "T3 = Tier 3",
];

const handleSave = (description, endTime, startTime, categoryType) => {
  // Here is where I would take the input from the user to make the event on the backend
  // endTime, startTime, category, owner, approved, description
  //https://react.dev/reference/react-dom/components/input#usage Controlling an input with a state variable
  // setIsOpen(false);
};

const Modal = ({ setIsOpen }) => {
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [categoryType, setCategoryType] = useState("");

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Event Details </h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Description:{" "}
            <input type="text" name="description" value={description}></input>
          </div>
          <div className={styles.modalContent}>
            Owner: <input type="text" name="owner" value={owner}></input>
          </div>
          <div className={styles.modalContent}>
            Category:{" "}
            <select name="Category" value={categoryType}>
              {categortyTypes.map((categortyType, index) => (
                <option value={categortyType}>{categortyType}</option>
              ))}
            </select>
          </div>
          <div className={styles.modalContent}>
            Time:
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={startTime}
            />{" "}
            to <input type="time" id="endTime" name="endTime" value={endTime} />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.saveBtn}
                onClick={() => setIsOpen(false)}
              >
                Save
              </button>
              <button
                className={styles.editBtn}
                onClick={() => setIsOpen(false)}
              >
                Edit
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
