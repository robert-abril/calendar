import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { createEvent } from "../db/events";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const handleSave = (owner, description, endTime, startTime, categoryType) => {
  // Here is where I would take the input from the user to make the event on the backend
  // endTime, startTime, category, owner, approved, description
  //https://react.dev/reference/react-dom/components/input#usage Controlling an input with a state variable

  createEvent(owner, description, endTime, startTime, categoryType);
};

const Modal = ({ setIsOpen, startInfo, endInfo }) => {
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [startTime, setStartTime] = startInfo || useState(new Date());
  const [endTime, setEndTime] = endInfo || useState(new Date());
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
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className={styles.modalContent}>
            Owner:{" "}
            <input
              type="text"
              name="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            ></input>
          </div>
          <div className={styles.modalContent}>
            Category:{" "}
            <select
              name="Category"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
            >
              {categortyTypes.map((categortyType, index) => (
                <option value={categortyType}>{categortyType}</option>
              ))}
            </select>
          </div>
          <div className={styles.modalContent}>
            Time:
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              timeFormat="h:mm aa"
              timeIntervals={30}
              dateFormat="MM-dd-yyyy HH:mm aa"
            />{" "}
            {console.log("startTime is " + startTime)}
            to{" "}
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              timeFormat="h:mm aa"
              timeIntervals={30}
              dateFormat="MM-dd-yyyy h:mm aa"
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.saveBtn}
                onClick={() => {
                  handleSave(
                    owner,
                    description,
                    endTime,
                    startTime,
                    categoryType
                  );
                  setIsOpen(false);
                }}
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
