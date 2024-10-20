import React, { useState } from "react";
import RecordList from "./RecordList";
import styles from "./ListingRecords.module.css";

function ListingSection(props) {
  const allRecords = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  return (
    <div>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">
        Select date
      </label>
      <input
        id="listingDate"
        className={styles["listing-picker-input"]}
        type="date"
        value={currentDate.toISOString().split("T")[0]}
        onChange={dateChangeHandler}
      />
      <RecordList records={allRecords} />
    </div>
  );
}

export default ListingSection;
