import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

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

const saveButtonHandler = (description, endTime, startTime, categoryType) => {
  // Here is where I would take the input from the user to make the event on the backend
  // endTime, startTime, category, owner, approved, description

  setIsOpen(false);
};

const Modal = ({ setIsOpen }) => {
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
            Description: <input type="text" name="description"></input>
          </div>
          <div className={styles.modalContent}>
            Owner: <input type="text" name="owner"></input>
          </div>
          <div className={styles.modalContent}>
            Category:{" "}
            <select name="Category">
              {categortyTypes.map((categortyType, index) => (
                <option value={categortyType}>{categortyType}</option>
              ))}
            </select>
          </div>
          <div className={styles.modalContent}>
            Time:
            <input type="time" id="startAppt" name="startAppt" /> to{" "}
            <input type="time" id="endAppt" name="endAppt" />
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
