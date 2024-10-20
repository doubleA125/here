import { useEffect, useState } from "react";
import "./components/CalorieRecord.css";
import RecordList from "./RecordList";
import CalorieRecordEdit from "./components/edits/CalorieRecordEdit";
import listingSection from "./ListingRecord";

const LOCAL_STORAGE_KEY = "calorieRecords";

function App() {
  const [records, setRecords] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [filterDate, setFilterDate] = useState("");

  function save() {
    if (records && records.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
    }
  }

  function loadRecords() {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(storageRecords);
    if (storageRecords) {
      setRecords(JSON.parse(storageRecords));
    } else {
      setRecords([]);
    }
  }

  useEffect(() => {
    loadRecords();
  }, []);

  useEffect(() => {
    save();
  }, [records]);

  const onFormSubmitHandler = (record) => {
    const FormattedRecord = { ...record, date: new Date(record.date) };
    setRecords([FormattedRecord, ...records]);
  };

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  const filteredRecords = records?.filter((record) => {
    if (!filterDate) return true;
    const recordDate = new Date(record.date).toISOString().split("T")[0];
    return recordDate === filterDate;
  });

  const totalCalories = filteredRecords.reduce(
    (total, record) => total + record.calories,
    0
  );

  return (
    <>
      <h1>Hello, I am Abdelrahman</h1>
      <label>
        Filter by date:
        <input type="date" value={filterDate} onChange={handleFilterChange} />
      </label>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Records" : "Show Records"}
      </button>
      {isVisible && (
        <>
          <CalorieRecordEdit onSubmitHandler={onFormSubmitHandler} />
          {filteredRecords.length > 0 ? (
            <>
              <ul className={RecordList}>
                {filteredRecords.map((record, index) => (
                  <li key={index} className={listingSection}>
                    <RecordList
                      date={record.date}
                      meal={record.meal}
                      content={record.content}
                      calories={record.calories}
                    />
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </li>
                ))}
              </ul>
              <p>Total Calories: {totalCalories}</p>
            </>
          ) : (
            <p>There is no record with that name</p>
          )}
        </>
      )}
    </>
  );
}

export default App;
