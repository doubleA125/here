import "./CalorieRecordDate.css";
import "../App";
import StyledRecordCell from "./StyleRecordCell";

function CalorieRecordDate(props) {
  var month = props.date?.toLocaleString("default", { month: "long" });
  var day = props.date?.getDate();
  var year = props.date?.getFullYear();
  return (
    <StyledRecordCell>
      <div className="record-date-month">{month}</div>
      <div className="record-date-day">{day}</div>
      <div className="record-date-year">{year}</div>
    </StyledRecordCell>
  );
}

export default CalorieRecordDate;
