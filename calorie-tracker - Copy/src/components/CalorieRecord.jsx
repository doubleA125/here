import React from "react";
import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "./StyleRecordCell";

function CalorieRecord(props) {
  const totalCalories = props.records?.reduce(
    (total, record) => total + Number(record.calories),
    0
  );

  return (
    <>
      {props.records?.map((record) => (
        <div className="CalorieRecord" key={record.date}>
          <ul className="record">
            <li>
              <CalorieRecordDate date={record.date} />
            </li>
            {record.calories < 0 ? (
              <li>invalid calories</li>
            ) : (
              <>
                <li>{record.meal}</li>
                <li>{record.content}</li>
              </>
            )}
            <li className="record_calorie">
              <StyledRecordCell>{record.calories}</StyledRecordCell>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default CalorieRecord;
