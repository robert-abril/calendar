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
            Event: <input type="text" name="event"></input>
          </div>
          <div className={styles.modalContent}>
            Owner: <input type="text" name="owner"></input>
          </div>
          <div className={styles.modalContent}>
            Category <select name="Category"></select>
          </div>
          <div className={styles.modalContent}>Time</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Save
              </button>
              <button
                className={styles.deleteBtn}
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
